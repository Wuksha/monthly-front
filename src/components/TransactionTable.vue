<template>
    <div class="main-container">
        <span class="move-to-right">
            <label for="dailySpendingsCheckbox">Show daily spendings</label>
            <input id="dailySpendingsCheckbox" v-model="showDailySpendings" @change="showDailySpendingsChanged" type="checkbox">
        </span>
        <table class="transactions">
            <tr class="table-header" @click="visible = !visible">
                <th class="transaction-date">Date</th>
                <th class="description">Description</th>
                <th class="description">Category</th>
                <th class="money-spent">Money spent</th>
            </tr>
            <tr id="new-transaction" v-if="showActionControls && visible">
                <td>New transaction</td>
                <td><input ref="descriptionInput" v-autofocus @keyup.enter="createTransaction" type="text" class="form-control" placeholder="Description of new transaction..." v-model="transaction.description"></td>
                <td>
                    <div class="category-container">
                        <model-select class="inline" :options="categoryValues"
                                    v-model="transaction.category.id"
                                    placeholder="Select item...">
                        </model-select>
                        <button id="show-modal" class="violet" @click="showNewCategoryModal = true">+</button>
                    </div>
                </td>
                <td><input @keyup.enter="createTransaction" type="text" class="form-control" placeholder="$$" v-model="transaction.moneyspent"></td>
            </tr>

            <template v-if="visible">
                <template class="transactions" style="width:100%" v-for="(transactionsObj, key) in dailyValues">
                    <tr v-for="transactObj in transactionsObj" v-bind:key="transactObj.id">
                        <td>{{ transactObj.date | toLocalDate }}</td>
                        <td>{{ transactObj.description }}</td>
                        <td>{{ transactObj.category.name }}</td>
                        <td>{{ transactObj.moneyspent }}</td>
                        <td v-if="showActionControls"><input type="button" class="violet" value="x" @click="deleteTransaction(transactObj.id)"></td>
                    </tr>
                    <tr class="total-row" v-bind:key="key" v-if="showDailySpendings">
                        <td colspan="3">Total:</td>
                        <td>{{ transactionsObj.sum }}</td>
                    </tr>
                </template>
            </template>
        </table>
        <category-form-modal v-if="showNewCategoryModal" @created="addCategoryFromModal" @close="showNewCategoryModal = false"></category-form-modal>
    </div>
</template>

<script>
    import transactionService from '../services/transaction-service';
    import LoadingSpinner from './LoadingSpinner';
    import CategoryForm from './CategoryForm';
    import { Transaction } from '../models/transaction';
    import { ModelSelect } from 'vue-search-select';

    export default {
        filters: {
            toLocalDate: function (value) {
                if (!value) return ''
                let date = new Date(value);
                return date.toLocaleDateString('en-GB');
            }
        },

        components: {
            'category-form-modal': CategoryForm,
            'spinner': LoadingSpinner,
            'model-select': ModelSelect
        },

        props: {
            'transactions': Array,
            'categories': Array,
            'showActionControls': Boolean
        },

        created() {
            this.transactionList = this.transactions;
            this.categoryList = this.categories;

            let showDailySpendings = localStorage.getItem("showDailySpendings");
            if (showDailySpendings) {
                this.showDailySpendings = showDailySpendings == 'true';
            }
        },

        computed: {
            dailyValues: function() {
                let key = 'date'
                let dailyValues = this.sortedTransactionsList.reduce(function(rv, x) {
                    (rv[x[key]] = rv[x[key]] || []).push(x);
                    return rv;
                }, {});

                for (let key of Object.keys(dailyValues)) {
                    let transactionsForDay = dailyValues[key];
                    let dailySum = 0;
                    for (let transaction of transactionsForDay) {
                        dailySum += transaction.moneyspent;
                    }
                    transactionsForDay.sum = dailySum;
                }
                return dailyValues;
            },
            categoryValues: function() {
                let retVal = this.categories.map(category => {
                    return {
                        value: category.id,
                        text: category.name
                    }
                });

                let noCategory = retVal.filter(el => el.text == 'No category');
                if(noCategory.length > 0)
                { 
                    this.transaction.category.id = noCategory[0].value;
                }

                return retVal;              
            },
            sortedTransactionsList: function() {
                function compare(a, b) {
                    if (a.id > b.id)
                        return -1;
                    if (a.id < b.id)
                        return 1;
                    return 0;
                }
                return this.transactionList.sort(compare);
            }
        },

        data() {
            return {
                transaction: new Transaction(),
                transactionList: [],
                isCurrentMonth: true,
                isLoaded: false,
                showNewCategoryModal: false,
                visible: true,
                processStartEventName: 'started-processing',
                processFinishEventName: 'finished-processing',
                showDailySpendings: false
            }
        },

        methods: {
            createTransaction() {
                this.$refs.descriptionInput.focus();
                this.$emit(this.processStartEventName);
                transactionService.createTransaction(this.transaction)
                    .then(response =>
                    {
                        this.transaction.description='';
                        this.transaction.moneyspent='';
                        this.transactionList.push(response);
                        this.$emit('updated',  this.transactionList);
                        this.$emit(this.processFinishEventName);
                        this.$nextTick(() => {
                            this.$refs.descriptionInput.focus();
                        });
                    }).catch(error=>
                    {
                        alert(error);
                        this.$emit(this.processFinishEventName);
                    });
            },
            deleteTransaction(id) {
                if (!confirm('Are you sure you want to delete this transaction?')) {
                    return;
                }
                this.$emit(this.processStartEventName);
                transactionService.delete(id)
                    .then(response => {
                        this.transactionList = this.transactionList.filter(transaction => transaction.id != id);
                        this.$emit('updated', this.transactionList);
                        this.$emit(this.processFinishEventName);
                    })
                    .catch(error => {
                        alert(error);
                        this.$emit(this.processFinishEventName);
                    });
            },

            addCategoryFromModal(category) {
                this.categories.push(category);
                this.$nextTick(() => {
                    this.transaction.category.id = category.id;
                });
                this.$refs.descriptionInput.focus();
                this.showNewCategoryModal = false;
            },

            showDailySpendingsChanged() {
                localStorage.setItem("showDailySpendings", this.showDailySpendings);
            }
        }
    }
</script>

<style scoped>
    .transactions {
        font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
        border-collapse: collapse;
        width: 100%;
    }

    .transactions td, .transactions th {
        border: 2px solid rgb(202, 202, 202);
        padding: 8px;
    }

    .transactions tr:nth-child(odd){background-color: rgb(240, 240, 255);}

    .transactions tr:nth-child(even){background-color: rgb(222, 222, 255);}

    .transactions tr:first-child {background-color: rgb(124, 124, 225)}

    .transactions tr:hover {background-color: rgb(190, 190, 255);}

    .table-header:hover {
        background-color: rgb(100, 100, 200) !important;
        cursor: pointer;
    }

    .table-header {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: left;
        background-color: rgb(124, 124, 225);
        color: white;
    }

    #new-transaction {
        width: 100%;
    }

    .small-form-control {
        display: inline;
        width: 200px;
    }

    .description {
        width: 70%;
        min-width: 250px;
    }

    .money-spent{
        text-align: center;
        width: 20%;
        min-width: 100px;
    }

    .violet {
        background-color: rgb(124, 124, 225);
        color: white;
        border-radius: 35%;
        border: 1px solid gray;
    }

    .category-container { 
        display: flex;
        justify-content: space-around;
    }

    #show-modal {
        margin: 5px;
    }

    .total-row {
        background-color: rgb(185, 185, 233) !important;
    }

    .invisible {
        visibility: hidden;
    }

    .move-to-right {
        margin-left: auto;
        margin-right: 3em;
    }

    .main-container {
        display: flex;
        flex-direction: column;
    }
</style>