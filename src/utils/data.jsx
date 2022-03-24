
export const MASKAPAI = {
    GRD:{
        maskapai_id: "GRD",
        maskapai_nama: "Garuda Airline",
        maskapai_logo: "../images/garuda.jpg", 
    },
    SSA:{
        maskapai_id: "SSA",
        maskapai_nama: "Susi Air",
        maskapai_logo: "../images/susi_air.png", 
    },
    SJW:{
        maskapai_id: "SJW",
        maskapai_nama: "Sriwijaya Air",
        maskapai_logo: "../images/Sriwijaya_air.png", 
    },
    LIA:{
        maskapai_id: "LIA",
        maskapai_nama: "Lion Air",
        maskapai_logo: "../images/lion_air.png", 
    },
    BTK:{
        maskapai_id: "BTK",
        maskapai_nama: "Batik Air",
        maskapai_logo: "../images/batik_air.jpg",
    },
    ASS:{
        maskapai_id: "ASS",
        maskapai_nama: "Citilink",
        maskapai_logo: "../images/air_asia.png",
    },
};

export const BANDARA = {
    SKH:{
        bandara_kode: "SKH",
        bandara_nama: "Soekarno Hatta",
    },
    RDN:{
        bandara_kode: "RDN",
        bandara_nama: "Raden Intan",
    },
    KTJT:{
        bandara_kode: "KTJT",
        bandara_nama: "Kertajati",
    },
    JND:{
        bandara_kode: "JND",
        bandara_nama: "Juanda",
    },
    HND:{
        bandara_kode: "HND",
        bandara_nama: "Hang Nadim",
    },
    KLN:{
        bandara_kode: "KLN",
        bandara_nama: "Kualanamu",
    },
};

export const JADWAL = [
    {
        jadwal_id: "1",
        bandara_kode_keberangkatan: "SKH",
        bandara_kode_tujuan: "RDN",
        maskapai_id: "GRD"
    },
    {
        jadwal_id: "2",
        bandara_kode_keberangkatan: "SKH",
        bandara_kode_tujuan: "KTJT",
        maskapai_id: "LIA"
    },
    {
        jadwal_id: "3",
        bandara_kode_keberangkatan: "RDN",
        bandara_kode_tujuan: "KTJT",
        maskapai_id: "BTK"
    },
    {
        jadwal_id: "4",
        bandara_kode_keberangkatan: "KTJT",
        bandara_kode_tujuan: "SKH",
        maskapai_id: "AAS"
    },
    {
        jadwal_id: "5",
        bandara_kode_keberangkatan: "JND",
        bandara_kode_tujuan: "HND",
        maskapai_id: "SSA"
    },
    {
        jadwal_id: "6",
        bandara_kode_keberangkatan: "JND",
        bandara_kode_tujuan: "KLN",
        maskapai_id: "GRD"
    },
    {
        jadwal_id: "7",
        bandara_kode_keberangkatan: "HND",
        bandara_kode_tujuan: "KLN",
        maskapai_id: "BTK"
    },
    {
        jadwal_id: "8",
        bandara_kode_keberangkatan: "KTJT",
        bandara_kode_tujuan: "HND",
        maskapai_id: "LIA"
    },
    {
        jadwal_id: "9",
        bandara_kode_keberangkatan: "SKH",
        bandara_kode_tujuan: "KLN",
        maskapai_id: "SSA"
    },
    {
        jadwal_id: "10",
        bandara_kode_keberangkatan: "RDN",
        bandara_kode_tujuan: "HND",
        maskapai_id: "SJW"
    },

];