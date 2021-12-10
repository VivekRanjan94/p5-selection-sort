let arr = []

let i = 0
let j = 0

function setup() {
  createCanvas(windowWidth - 1, windowHeight - 1)
  arr = new Array(width)
  for (let i = 0; i < arr.length; i++) {
    arr[i] = random(height)
  }
}

function draw() {
  background(0)

  if (i > arr.length) {
    noLoop()
  } else {
    let min_idx = i
    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min_idx]) {
        min_idx = j
      }
    }
    swap(arr, min_idx, i)
    i++
  }

  for (let i = 0; i < arr.length; i++) {
    stroke(255)
    line(i, height, i, height - arr[i])
  }
}

function swap(arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
