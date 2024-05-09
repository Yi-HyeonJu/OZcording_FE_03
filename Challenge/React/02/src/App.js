import { useState } from "react";
import './App.css';
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

const App = () => {

  const [expenses, setExpense] = useState([
    { id: 1, charge: '콜라', amount: 1800},
    { id: 2, charge: '빵', amount: 1300},
    { id: 3, charge: '컵라면', amount: 1700}
  ])

  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState(0);

  const handleCharge = (e) => {
    setCharge(e.target.value);
  }
  const handleAmount = (e) => {
    setAmount(e.target.valueAsNumber)
  }

  const handleDelete = (id) => {
    const newExpense = expenses.filter(expense => expense.id !== id)
    
    setExpense(newExpense)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if( charge !== "" && amount > 0 ){
      const newExpense = {id: crypto.randomUUID(), charge, amount}
      const newExpenses = [...expenses, newExpense]
      
      setExpense(newExpenses)
      setCharge("")
      setAmount(0)
    }else {
      alert('상품과 비용을 모두 입력해주세요.')
      console.error('error')
    }
  }

    return(
      <main className='main-container'>
        <div className='sub-container'>
          <h1>장바구니</h1>

          <div style={{ width: '100%', backgroundColor: 'white', padding: '1rem' }}>
            {/* Expense Form */}
            <ExpenseForm charge={charge} handleCharge={handleCharge}
            amount={amount} handleAmount={handleAmount}
            handleSubmit={handleSubmit}
            />
          </div>

          <div style={{ width: '100%', backgroundColor: 'white', padding: '1rem' }}>
            {/* Expense List */}
            <ExpenseList expense={expenses} handleDelete={handleDelete}/>
          </div>

          <div style={{ display: 'flex', justifyContent: 'start', marginTop: '1rem' }}>
            <p style={{ fontSize: '2rem' }}>
              총합계 :
            </p>
          </div>
        </div>
      </main>
    )
}

export default App;