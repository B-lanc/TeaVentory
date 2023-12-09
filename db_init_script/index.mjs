import PocketBase from "pocketbase"
import fs from "fs"
import { parse } from "csv-parse"

const pb = new PocketBase("http://localhost:8090")
await pb.collection('users').authWithPassword('Testing', 'j1j2j3j4')


// //inventory db
// fs.createReadStream('./inventory.csv')
//     .pipe(parse({ delimiter: ",", from_line: 2 }))
//     .on("data", async (row)=>{
//         const newRecord = {
//             inv_id : row[1],
//             name : row[1],
//             size : parseInt(row[3]),
//             stock : Math.floor(Math.random() * 300),
//             unit : row[4],
//             supplier : row[5],
//             delivery_duration : parseInt(row[6]),
//             delivery_delay : parseInt(row[7]),
//         }
//         try{
//             await pb.collection('inventory').create(newRecord, {requestKey:null})
//         } catch (e) {
//             console.log(e)
//         }
//     })

// //items db
// fs.createReadStream('./items.csv')
//     .pipe(parse({ delimiter: ",", from_line: 2 }))
//     .on("data", async (row)=>{
//         const newRecord = {
//             item_id : row[1],
//             name : row[0],
//         }
//         try{
//             await pb.collection('items').create(newRecord, {requestKey:null})
//         } catch (e) {
//             console.log(e)
//         }
//     })

// //middle_items db
// fs.createReadStream('./middle_recipes.csv')
//     .pipe(parse({ delimiter: ",", from_line: 3 }))
//     .on("data", async (row)=>{
//         const newRecord = {
//             item_id : row[0],
//             name : row[0],
//             size : parseInt(row[1]),
//             unit : row[2],
//         }
//         try{
//             await pb.collection('middle_items').create(newRecord, {requestKey:null})
//         } catch (e) {
//             console.log(e)
//         }
//     })

// //middle_item_recipes db
// let count = 0
// const inv = await pb.collection('inventory').getFullList()
// const middle_items = await pb.collection('middle_items').getFullList()
// const inv_id = []
// fs.createReadStream('./middle_recipes.csv')
//     .pipe(parse({ delimiter: ",", from_line: 1 }))
//     .on("data", async (row)=>{
//         if (count===0){
//             row.forEach((el, idx) => {
//                 if (idx >= 3){
//                     inv_id.push(inv.filter((item)=>item.inv_id===el)[0].id)
//                 }
//             });
//             console.log(inv_id)
//             count++
//         }else if (count===1){
//             count++
//         }else{
//             const middle_item_id = middle_items.filter((item)=>item.item_id===row[0])[0].id
//             row.slice(3).forEach(async(el, idx) => {
//                 if (el !== ''){
//                     const newRecord = {
//                         item_id : middle_item_id,
//                         inv_id : inv_id[idx],
//                         qty : parseInt(el),
//                     }
//                     try{
//                         await pb.collection('middle_item_recipes').create(newRecord, {requestKey:null})
//                     } catch (e) {
//                         console.log(e)
//                     }
//                 }
//             })
//         }
//     })


// //item_recipes db
// let count = 0
// const inv = await pb.collection('inventory').getFullList()
// const items = await pb.collection('items').getFullList()
// const middle_items = await pb.collection('middle_items').getFullList()
// const inv_id = []
// const mid_id = []
// fs.createReadStream('./item_recipes.csv')
//     .pipe(parse({ delimiter: ",", from_line: 1 }))
//     .on("data", async (row)=>{
//         if (count===0){
//             row.forEach((el, idx) => {
//                 if (idx >= 2){
//                     let _inv_id = inv.filter((item)=>item.inv_id===el)
//                     _inv_id = _inv_id.length == 0 ? null : _inv_id[0].id
//                     inv_id.push(_inv_id)
//                     let _mid_id = middle_items.filter((item)=>item.item_id===el)
//                     _mid_id = _mid_id.length == 0 ? null : _mid_id[0].id
//                     mid_id.push(_mid_id)
//                 }
//             });
//             count++
//         }else if (count===1){
//             count++
//         }else{
//             const item_id = items.filter((item)=>item.item_id===row[0])[0].id
//             row.slice(2).forEach(async(el, idx) => {
//                 if (el !== ''){
//                     const newRecord = {
//                         item_id : item_id,
//                         inv_id : inv_id[idx],
//                         mid_id : mid_id[idx],
//                         qty : parseInt(el),
//                     }
//                     try{
//                         await pb.collection('item_recipes').create(newRecord, {requestKey:null})
//                     } catch (e) {
//                         console.log(e)
//                     }
//                 }
//             })
//         }
//     })



//transactions db
const items = await pb.collection('items').getFullList()
fs.createReadStream('./transactions.csv')
    .pipe(parse({ delimiter: ",", from_line: 2 }))
    .on("data", async (row)=>{
        const d = row[1].split("/")
        const t = row[2].split(":")
        const dt = new Date(d[2], d[1], d[0], t[0], t[1], t[2])


        try{
            const item_id = items.filter((item)=> item.item_id === row[7])[0].id
            const topping_id = !row[8] ? null : items.filter((item)=> item.item_id === row[8])[0].id

            const newRecord = {
                receipt: row[0],
                datetime: dt,
                item_id: item_id,
                topping_id: topping_id,
                qty: parseInt(row[9])
            }
            await pb.collection('transactions').create(newRecord, {requestKey:null})
        } catch (e) {
            console.log(e)
        }
     })







// //somehow battery died while I was sending the transactions, so gotta delete first
// const records = await pb.collection('transactions').getFullList()
// records.forEach(async(rec)=>{
//     await pb.collection('transactions').delete(rec.id, {requestKey:null});
// })