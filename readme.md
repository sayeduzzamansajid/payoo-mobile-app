# Wallet App (Vanilla JS)

A simple browser-based wallet simulation that lets users log in and perform core wallet actions: add money, cash out, transfer funds, pay bills, and view a basic transaction history. The app is built with plain HTML, CSS (via utility classes), and vanilla JavaScript, using DOM state for balances and operations.

## Live Demo

**Live Demo Link** : [Click here to view Live Payoo Mobile App](https://your-live-link-here.com)

---

## Demo Credentials
```
Phone: 01622299375
PIN: 1234
```

---

## Features

- **Login** with predefined phone and PIN to access the wallet dashboard.  
- **View and update balance** directly in the UI.  
- **Add Money** with account validation and PIN check.  
- **Cash Out** with agent number validation, PIN check, and insufficient funds protection.  
- **Transfer Money** with account validation, amount checks, and PIN verification.  
- **Pay Bill** by bill type and amount with validation and balance deduction.  
- **Transaction History** recorded in memory for the current session.  

---

## Usage Guide

### Add Money
- Enter bank, account number (11+ digits), amount (> 0), and PIN `1234`.  
- Balance increases and an "Add Money" event is recorded.  

### Cash Out
- Enter agent number (11+ digits), amount (> 0), and PIN `1234`.  
- Requires sufficient balance; balance decreases and "Cash Out" is recorded.  

### Transfer Money
- Enter recipient account (11+ digits), amount (> 0), and PIN `1234`.  
- Requires sufficient balance; balance decreases and "Transfer Money" is recorded.  

### Pay Bill
- Enter biller account, bill type, amount (> 0), and PIN `1234`.  
- Requires sufficient balance; balance decreases and "Bill Pay" is recorded.  

### Transaction History
- Click the history action to render this session’s actions from an in-memory array.

---

## Tech Notes

- **State Management:** Balance is kept in the DOM (`#available-balance`). Transactions are stored in a session-scoped array `transactionData`.  
- **UI Toggling:** `displayOnly(id)` hides all `.form` sections and shows one by id. `toggleColor(id)` updates selected card styles.  
- **Validation:** Amounts must be greater than 0; insufficient funds are blocked. Account/agent numbers require at least 11 digits. PIN is hardcoded as `1234` for all protected actions.  
- **Navigation:** Successful login sets `window.location.href` to `./home.html`.

---

## Known Limitations

- Hardcoded credentials and PIN (for demo only).  
- No persistence: data resets on refresh; transactions are not saved.  
- Basic alert-based error messages; no inline form error UI.  
- Some robustness issues:
  - `script.js` missing closing braces in the login `if/else` block; ensure braces are balanced.  
  - Transaction render template in `home.js` appears truncated/incorrect; verify `transaction.innerHTML` construction.

---

## Suggested Improvements

- Extract validation and formatting utilities; add inline error display.  
- Persist balance and transactions via `localStorage` or a backend.  
- Mask PIN inputs and add rate limiting/lockout simulation.  
- Replace alerts with consistent toast/notification components.  
- Fix and enhance the transaction list with type, amount, and balance after transaction.  
- Add unit tests for core operations and validation.

---

