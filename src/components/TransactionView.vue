<template>
    <div>
        <div v-if="isLoaded" :class="{ hidden: isLoading }">
            <div>
                <div class="center-middle">
                    <transaction-table 
                        :categories="categories" 
                        :transactions="transactionList" 
                        :showActionControls="isCurrentMonth" 
                        @started-processing="isLoading = true" 
                        @finished-processing="isLoading = false" 
                        @updated="handleTransactionTableUpdate">
                    </transaction-table>
                    <br>
                    <category-table :transactions="transactionList"></category-table>
                    <br>
                    <money-to-spend-table 
                        :transactions="transactionList" 
                        :editable="isCurrentMonth" 
                        :money="moneyToSpend"
                        @started-processing="isLoading = true" 
                        @finished-processing="isLoading = false">
                    </money-to-spend-table>
                </div>
            </div>
        </div>
        <spinner v-if="!isLoaded || isLoading"></spinner>
    </div>
</template>

<script>

    import transactionService from '../services/transaction-service'
    import VueRouter from 'vue-router'
    import moment from 'moment'
    import categoryService from '../services/category-service'
    import LoadingSpinner from './LoadingSpinner'
    import TransactionTable from './TransactionTable'
    import CategoryTable from './CategoryTable'
    import MoneyToSpendTable from './MoneyToSpendTable'
    
    export default 
    {
        components: {
            'spinner': LoadingSpinner,
            'transaction-table': TransactionTable,
            'category-table': CategoryTable,
            'money-to-spend-table': MoneyToSpendTable
        },

        name: 'TransactionView',

        data()
        {
            return {
                yearToSend: 0,
                monthToSend: 0,
                isCurrentMonth: false,
                transactionList: [],
                categories: [],
                areTransactionsLoaded: false,
                areCategoriesLoaded: false,
                isMoneyToSpendLoaded: false,
                isLoading: false
            }
        },

        computed: {
            isLoaded: {
                set: function (newValue) {
                    return false;
                },

                get: function() {
                    return this.areTransactionsLoaded && this.areCategoriesLoaded && this.isMoneyToSpendLoaded;
                }
            }
        },

        mounted()
        {
            this.getTransactionsForMonth();
            this.getCategories();
            this.getMoneyToSpend();
        },
        
        methods: 
        {
            getTransactionsForMonth()
            {
                let monthToCheck = moment(Date.now()).format('M');
                let yearToCheck = moment(Date.now()).format('YYYY');
                if (!this.$route.params.Year || !this.$route.params.Month) {
                    this.yearToSend = localStorage.getItem('yearToSend');
                    this.monthToSend = localStorage.getItem('monthToSend');
                } 
                else {
                    this.yearToSend = this.$route.params.Year;
                    this.monthToSend = this.$route.params.Month;
                    localStorage.setItem('yearToSend', this.yearToSend);
                    localStorage.setItem('monthToSend', this.monthToSend);
                }

                this.isCurrentMonth=(monthToCheck == this.monthToSend && yearToCheck == this.yearToSend);
                transactionService.getTransactionsForMonth(this.monthToSend,this.yearToSend)
                    .then(response =>
                    {
                        this.transactionList = response;
                        this.areTransactionsLoaded = true;
                    }).catch(error=>
                    {
                        alert(error);
                    });
            },
            getCategories() {
                categoryService.getAll()
                    .then(response => {
                        this.categories = response;
                        this.areCategoriesLoaded = true;
                    })
                    .catch(error => {
                        alert(error);
                        this.areCategoriesLoaded = true;
                    });
            },
            getMoneyToSpend() {
                transactionService.getMoneyPerMonth(this.monthToSend, this.yearToSend)
                    .then(value => {
                        if (value) {
                            this.moneyToSpend = value;
                            this.savedMoneyToSpend = value;
                        } else {
                            this.moneyToSpend = 0;
                            this.savedMoneyToSpend = 0;
                        }

                        this.isMoneyToSpendLoaded = true;
                    })
                    .catch(error => {
                        alert(error);
                        this.isMoneyToSpendLoaded = true;
                    })
            },
            handleTransactionTableUpdate(transactionList) {
                this.transactionList = transactionList;
            }
        }
    }
</script>

<style scoped>
    .center-middle {
        width: 85%;
        margin-left: auto;
        margin-right: auto;
    }

    .hidden {
        display: hidden
    }
</style>
