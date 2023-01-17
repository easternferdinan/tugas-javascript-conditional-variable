const dataRekening = [
    {
        nama: "Antoni",
        saldo: 100000,
        id_nasabah: 1,
    },
    {
        nama: "Valentino",
        saldo: 2000000,
        id_nasabah: 2,
    },
    {
        nama: "Hamilton",
        saldo: 2500000,
        id_nasabah: 3,
    }
]

// Menampilkan data rekening dari nasabah 3 atas nama Hamilton
const dataFetch = dataRekening.filter((rekening) => rekening.id_nasabah === 3);
let limitBawah = dataFetch[0].saldo > 50000 ? "Saldo anda berada di atas batas minimum." : "Saldo anda berada di bawah batas minimum.";

console.log(` Halo ${dataFetch[0].nama}!\n ID Nasabah anda: ${dataFetch[0].id_nasabah}\n Saldo anda: ${dataFetch[0].saldo}\n Status: ${limitBawah}`);

// Menampilkan saldo semua nasabah setelah ditambahkan sebanyak 500
const dataMap = dataRekening.map((rekening) => rekening.saldo + 500);

console.log("\n", dataMap)