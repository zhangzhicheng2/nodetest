var file=require("fs")
file.readFile("./hello.txt",function(error,data){
  console.log(data.toString())
})
file.writeFile("./hello1.txt","da jia hao",function(error){
    console.log(error)
    console.log("写入成功")
})

