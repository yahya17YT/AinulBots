/*
 * ngelarang lu biar g diubah kyknya emg susah ya anjg
 * jadi kalau lu g bsa ngehargain orang
 * setidaknya buat sc ori by gw, trs buat sc lu hasil copas tuh
 * better bgtu dripada nma gw dihapus smua
 * najis 👎🗿
*/

let handler = async (m, { conn }) => {
let ye = `@${m.sender.split`@`[0]}`
let esce = `
Hai ${ye} Lagi Nyari Sc Ya? 

Nih Link Sc Nya Dibawah :
https://github.com/AinulBot

_*Jangan Lupa Bilang Makasih*_`
conn.sendBut(m.chat, esce, wm3, 'Thanks', 'thanks', m) 
}
handler.help = ['scsfsccs', 'sourcbsbsvsvecode']
handler.tags = ['inscvsvfo']
handler.command = /^(sc|sourcecvsvsvsvode)$/i

module.exports = handler
