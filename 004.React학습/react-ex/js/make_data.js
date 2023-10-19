// 데이터 유형에 맞게 만들기 ////


let category = ["man","woman","kid"];
let gname = ["반스캐쥬얼","반스어얼리","반스뉴진스","반스스타일"];
let gprice = ["230000","155200","160000","58000"];

let bb = '';

// 호출시 : rdm[아이템개수]
let rdm = (x)=> Math.floor(Math.random()*x)
for(let x=1;x<19;x++){
bb += `
    {
        "idx":${x},
        "gname":${gname[rdm(4)]},
        "category":${category[rdm(3)]},
        "gprice":${gprice[rdm(4)]}
    },
`;
}

console.log(bb);

