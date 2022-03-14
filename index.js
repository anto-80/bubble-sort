function bubbleSort(arr) {
    let notSwapped
    for (let i = arr.length - 1; i > 0; i--) {
      notSwapped = true
      for (let j = 0; j < i; j++) {
        if (arr[j] > arr[j + 1]) {
          
          ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
          notSwapped = false
        }
      }
      if (notSwapped) break
    }
    return arr
}

module.exports = bubbleSort
