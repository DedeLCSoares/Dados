function insercaoDireta(vetor){

    for(let i = 0; i < vetor.length; i++){

        for(let j = 0; j < vetor.length; j++){

            if(vetor[i] < vetor[j]){
                var aux = vetor[i]

                for(let k = 0; k > j; k++){
                    vetor[k] = vetor[k-1]
                }
                vetor[j] = aux
            }
        }
    }
}

let nums = [77, 44, 22, 33, 99, 55, 88, 0, 66, 11]

console.log(nums)
insercaoDireta(nums)
console.log(nums)

console.time(`insercaoDireta1...`)
insercaoDireta(nums)
console.timeEnd(`insercaoDireta1...`)

console.time(`insercaoDireta...`)
insercaoDireta(nums)
console.timeEnd(`insercaoDireta...`)