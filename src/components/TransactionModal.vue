<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">

                    <div class="modal-header">
                        <slot name="header">
                            Transactions for category: {{ category }}
                        </slot>
                    </div>

                    <div class="modal-body">
                        <slot name="body">
                            <transaction-table :transactions="filteredTransactions" :showActionControls="false"></transaction-table>
                        </slot>
                    </div>

                    <div class="modal-footer">
                        <slot name="footer">
                            <button class="btn modal-default-button" @click="$emit('close')">Cancel</button>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
  </transition>
</template>

<script>
    import TransactionTable from './TransactionTable';

    export default {
        computed: {
            filteredTransactions() {
                return this.transactionList.filter(transaction => transaction.category.name == this.category)
            }
        },

        components: {
            'transaction-table': TransactionTable
        },

        props: {
            "categoryName": String,
            "transactions": Array
        },

        data() {
            return {
                category: '',
                transactionList: []
            }
        },

        created() {
            this.category = this.categoryName;
            this.transactionList = this.transactions;
        }
    }
</script>

<style scoped>
    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
        transition: opacity .3s ease;
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }

    .modal-container {
        display: flex;
        vertical-align: middle;
        flex-direction: column;
        width: 85%;
        height: 600px;
        margin: 0px auto;
        padding: 20px 30px;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .3s ease;
        font-family: Helvetica, Arial, sans-serif;
    }

    .modal-header h3 {
        margin-top: 0;
        color: #42b983;
    }

    .modal-body {
        margin: 20px 0;
        overflow: scroll;
        height: 95%;
    }

    .modal-default-button {
        float: right;
    }

    /*
    * The following styles are auto-applied to elements with
    * transition="modal" when their visibility is toggled
    * by Vue.js.
    *
    * You can easily play with the modal transition by editing
    * these styles.
    */

    .modal-enter {
        opacity: 0;
    }

    .modal-leave-active {
        opacity: 0;
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
</style>

