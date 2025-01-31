const mahasiswaNim = '20230040261';
const updatedData = {
    nama : 'Anisa Cikal Virgifiani',
    gender: 'P',
    prodi: 'Teknik Informatika'
    alamat: 'Jl. Koleberes Kp. Pasir Ragi'
};

fetch( `http://localhost:3000/mahasiswa/${mahasiswaNim}`), {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedData)
} )
    .then( response => response.json() )
    .then(data => console.log(data))
    .cath(error => console.error('Error:', error));