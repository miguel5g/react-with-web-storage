const HISTORY_KEY = 'history';

function saveHistory(history) {
  sessionStorage.setItem(HISTORY_KEY, JSON.stringify(history));
}

function getHistory() {
  const localDogHistory = sessionStorage.getItem(HISTORY_KEY);
  const localParsedDogHistory = localDogHistory === null ? [] : JSON.parse(localDogHistory);

  return localParsedDogHistory;
}

function clearHistory() {
  sessionStorage.removeItem(HISTORY_KEY);
}

export { saveHistory, getHistory, clearHistory };
