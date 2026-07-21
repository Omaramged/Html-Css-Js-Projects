const birthDateInput = document.getElementById('birthDate')
const calculateButton = document.getElementById('calculateButton')
const outputDiv = document.getElementById('output')

function getAge(birthDate) {
  const today = new Date()
  let year = today.getFullYear() - birthDate.getFullYear()
  let month = today.getMonth() - birthDate.getMonth()
  let day = today.getDate() - birthDate.getDate()

  if (day < 0) {
    month = month - 1
    day = day + new Date(today.getFullYear(), today.getMonth(), 0).getDate()
  }
  if (month < 0) {
    year = year - 1
    month = month + 12
  }

  return { year, month, day }
}

function showResult(age) {
  outputDiv.className = 'output'
  outputDiv.textContent = `You are ${age.year} years, ${age.month} months, and ${age.day} days old.`
}

function showError(message) {
  outputDiv.className = 'output error'
  outputDiv.textContent = message
}

calculateButton.addEventListener('click', function () {
  const dateValue = birthDateInput.value
  if (!dateValue) {
    showError('Please choose a birth date.')
    return
  }

  const birthDate = new Date(dateValue)
  const today = new Date()
  if (birthDate > today) {
    showError('Birth date cannot be in the future.')
    return
  }

  const age = getAge(birthDate)
  showResult(age)
})
