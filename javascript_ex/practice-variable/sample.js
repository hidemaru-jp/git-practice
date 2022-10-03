var str = "webcamp" //グローバルスコープ

function foo() {
  console.log(str)
  var y = "hello" //関数スコープ
}

foo()