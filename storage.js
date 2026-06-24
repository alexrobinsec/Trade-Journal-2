
// LocalStorage helpers
function saveTrades(trades){
 localStorage.setItem('tradeJournalTrades', JSON.stringify(trades));
}
function loadTrades(){
 return JSON.parse(localStorage.getItem('tradeJournalTrades') || '[]');
}
