const apartments = [
  {
    "id": 0,
    "name": "UF 101",
    "superficie": "55,15m2",
    "piso": 1,
    "dormitorios": 1.5,
    "amenities": ["laundry", "garage"],
    "pdf": "https:linkpdf",
    "img1": "images/planosApartamentos/uf101-401-801.png",
    "tipo": "dosambientes"
  },
  {
    "id": 1,
    "name": "UF 102",
    "superficie": "30,50m2",
    "piso": 1,
    "dormitorios": 0,
    "amenities": ["laundry", "garage"],
    "pdf": "https:linkpdf",
    "img1": 'images/planosApartamentos/uf102-402-802.png',
    "tipo": "monoambiente"
  },
  {
    "id": 0,
    "name": "UF 103",
    "superficie": "30,66m2",
    "piso": 1,
    "dormitorios": 0,
    "amenities": ["laundry", "garage"],
    "pdf": "https:linkpdf",
    "img1": "images/planosApartamentos/uf103-403-803.png",
    "tipo": "monoambiente"
  },
  {
    "id": 0,
    "name": "UF 104",
    "superficie": "48,43m2",
    "piso": 1,
    "dormitorios": 1,
    "amenities": ["laundry", "garage"],
    "pdf": "https:linkpdf",
    "img1": "images/planosApartamentos/uf104-404-804.png",
    "tipo": "dosambientes"
  },
  {
    "id": 0,
    "name": "UF 105",
    "superficie": "47,71m2",
    "piso": 1,
    "dormitorios": 1,
    "amenities": ["laundry", "garage"],
    "pdf": "https:linkpdf",
    "img1": "images/planosApartamentos/uf105-405-805.png",
    "tipo": "dosambientes"
  },
  {
    "id": 0,
    "name": "UF 106",
    "superficie": "27,54m2",
    "piso": 1,
    "dormitorios": 0,
    "amenities": ["laundry", "garage"],
    "pdf": "https:linkpdf",
    "img1": "images/planosApartamentos/uf106-406-806.png",
    "tipo": "monoambiente"
  },
  {
    "id": 0,
    "name": "UF 107",
    "superficie": "30,62m2",
    "piso": 1,
    "dormitorios": 0,
    "amenities": ["laundry", "garage"],
    "pdf": "https:linkpdf",
    "img1": "images/planosApartamentos/uf107-407-807.png",
    "tipo": "monoambiente"
  },
  {
    "id": 0,
    "name": "UF 108",
    "superficie": "46,54m2",
    "piso": 1,
    "dormitorios": 1,
    "amenities": ["laundry", "garage"],
    "pdf": "https:linkpdf",
    "img1": "images/planosApartamentos/uf108-408-808.png",
    "tipo": "dosambientes"
  },
  {
    "id": 0,
    "name": "UF 201",
    "superficie": "57,54m2",
    "piso": 2,
    "dormitorios": 1.5,
    "amenities": ["laundry", "garage"],
    "pdf": "https:linkpdf",
    "img1": "images/planosApartamentos/uf201.png",
    "tipo": "dosambientes"
  },
  {
    "id": 0,
    "name": "UF 202",
    "superficie": "30,50m2",
    "piso": 2,
    "dormitorios": 0,
    "amenities": ["laundry", "garage"],
    "pdf": "https:linkpdf",
    "img1": "images/planosApartamentos/uf202.png",
    "tipo": "monoambiente"
  },
  {
    "id": 0,
    "name": "UF 203",
    "superficie": "30,88m2",
    "piso": 2,
    "dormitorios": 0,
    "amenities": ["laundry", "garage"],
    "pdf": "https:linkpdf",
    "img1": "images/planosApartamentos/uf203.png",
    "tipo": "monoambiente"
  },
  {
    "id": 0,
    "name": "UF 204",
    "superficie": "45,40m2",
    "piso": 2,
    "dormitorios": 1,
    "amenities": ["laundry", "garage"],
    "pdf": "https:linkpdf",
    "img1": "images/planosApartamentos/uf204.png",
    "tipo": "dosambientes"
  },
  {
    "id": 0,
    "name": "UF 205",
    "superficie": "44,51m2",
    "piso": 2,
    "dormitorios": 1,
    "amenities": ["laundry", "garage"],
    "pdf": "https:linkpdf",
    "img1": "images/planosApartamentos/uf205.png",
    "tipo": "dosambientes"
  },
  {
    "id": 0,
    "name": "UF 206",
    "superficie": "30,89m2",
    "piso": 2,
    "dormitorios": 0,
    "amenities": ["laundry", "garage"],
    "pdf": "https:linkpdf",
    "img1": "images/planosApartamentos/uf206.png",
    "tipo": "monoambiente"
  },
  {
    "id": 0,
    "name": "UF 207",
    "superficie": "27,54m2",
    "piso": 2,
    "dormitorios": 0,
    "amenities": ["laundry", "garage"],
    "pdf": "https:linkpdf",
    "img1": "images/planosApartamentos/uf207.png",
    "tipo": "monoambiente"
  },
  {
    "id": 0,
    "name": "UF 208",
    "superficie": "47,63m2",
    "piso": 2,
    "dormitorios": 0,
    "amenities": ["laundry", "garage"],
    "pdf": "https:linkpdf",
    "img1": "images/planosApartamentos/uf208.png",
    "tipo": "dosambientes"
  },
  {
    "id": 0,
    "name": "UF 301",
    "superficie": "58,13m2",
    "piso": 3,
    "dormitorios": 1.5,
    "amenities": ["laundry", "garage"],
    "pdf": "https:linkpdf",
    "img1": "images/planosApartamentos/uf301-901.png",
    "tipo": "dosambientes"
  },
  {
    "id": 0,
    "name": "UF 302",
    "superficie": "30,52m2",
    "piso": 3,
    "dormitorios": 0,
    "amenities": ["laundry", "garage"],
    "pdf": "https:linkpdf",
    "img1": "images/planosApartamentos/uf302-902.png",
    "tipo": "monoambiente"
  },
  {
    "id": 0,
    "name": "UF 303",
    "superficie": "27,67m2",
    "piso": 3,
    "dormitorios": 0,
    "amenities": ["laundry", "garage"],
    "pdf": "https:linkpdf",
    "img1": "images/planosApartamentos/uf303-903.png",
    "tipo": "monoambiente"
  },
  {
    "id": 0,
    "name": "UF 304",
    "superficie": "46,37m2",
    "piso": 3,
    "dormitorios": 0,
    "amenities": ["laundry", "garage"],
    "pdf": "https:linkpdf",
    "img1": "images/planosApartamentos/uf304-904.png",
    "tipo": "dosambientes"
  },
  {
    "id": 0,
    "name": "UF 305",
    "superficie": "44,35m2",
    "piso": 3,
    "dormitorios": 1,
    "amenities": ["laundry", "garage"],
    "pdf": "https:linkpdf",
    "img1": "images/planosApartamentos/uf305-905.png",
    "tipo": "dosambientes"
  },
  {
    "id": 0,
    "name": "UF 306",
    "superficie": "30,77m2",
    "piso": 3,
    "dormitorios": 0,
    "amenities": ["laundry", "garage"],
    "pdf": "https:linkpdf",
    "img1": "images/planosApartamentos/uf306-906.png",
    "tipo": "monoambiente"
  },
  {
    "id": 0,
    "name": "UF 307",
    "superficie": "30,74m2",
    "piso": 3,
    "dormitorios": 0,
    "amenities": ["laundry", "garage"],
    "pdf": "https:linkpdf",
    "img1": "images/planosApartamentos/uf307-907.png",
    "tipo": "monoambiente"
  },
  {
    "id": 0,
    "name": "UF 308",
    "superficie": "45,45m2",
    "piso": 3,
    "dormitorios": 1,
    "amenities": ["laundry", "garage"],
    "pdf": "https:linkpdf",
    "img1": "images/planosApartamentos/uf308-908.png",
    "tipo": "dosambientes"
  },
  {
    "id": 0,
    "name": "UF 401",
    "superficie": "55,15m2",
    "piso": 4,
    "dormitorios": 1.5,
    "amenities": ["laundry", "garage"],
    "pdf": "https:linkpdf",
    "img1": "images/planosApartamentos/uf101-401-801.png",
    "tipo": "dosambientes"
  },
  {
    "id": 0,
    "name": "UF 402",
    "superficie": "30,50m2",
    "piso": 1,
    "dormitorios": 0,
    "amenities": ["laundry", "garage"],
    "pdf": "https:linkpdf",
    "img1": "images/planosApartamentos/uf102-402-802.png",
    "tipo": "monoambiente"
  },
  {
    "id": 0,
    "name": "UF 403",
    "superficie": "30,66m2",
    "piso": 4,
    "dormitorios": 0,
    "amenities": ["laundry", "garage"],
    "pdf": "https:linkpdf",
    "img1": "images/planosApartamentos/uf103-403-803.png",
    "tipo": "monoambiente"
  },
  {
    "id": 0,
    "name": "UF 404",
    "superficie": "48,43m2",
    "piso": 4,
    "dormitorios": 1,
    "amenities": ["laundry", "garage"],
    "pdf": "https:linkpdf",
    "img1": "images/planosApartamentos/uf104-404-804.png",
    "tipo": "dosambientes"
  },
  {
    "id": 0,
    "name": "UF 405",
    "superficie": "47,71m2",
    "piso": 4,
    "dormitorios": 1,
    "amenities": ["laundry", "garage"],
    "pdf": "https:linkpdf",
    "img1": "images/planosApartamentos/uf105-405-805.png",
    "tipo": "dosambientes"
  },
  {
    "id": 0,
    "name": "UF 406",
    "superficie": "27,54m2",
    "piso": 4,
    "dormitorios": 0,
    "amenities": ["laundry", "garage"],
    "pdf": "https:linkpdf",
    "img1": "images/planosApartamentos/uf106-406-806.png",
    "tipo": "monoambiente"
  },
  {
    "id": 0,
    "name": "UF 407",
    "superficie": "30,62m2",
    "piso": 4,
    "dormitorios": 0,
    "amenities": ["laundry", "garage"],
    "pdf": "https:linkpdf",
    "img1": "images/planosApartamentos/uf107-407-807.png",
    "tipo": "monoambiente"
  },
  {
    "id": 0,
    "name": "UF 408",
    "superficie": "46,54m2",
    "piso": 4,
    "dormitorios": 1,
    "amenities": ["laundry", "garage"],
    "pdf": "https:linkpdf",
    "img1": "images/planosApartamentos/uf108-408-808.png",
    "tipo": "dosambientes"
  },
  {
    "id": 0,
    "name": "UF 501",
    "superficie": "58,13m2",
    "piso": 5,
    "dormitorios": 1.5,
    "amenities": ["laundry", "garage"],
    "pdf": "https:linkpdf",
    "img1": "images/planosApartamentos/uf501-701.png",
    "tipo": "dosambientes"
  },
  {
    "id": 0,
    "name": "UF 502",
    "superficie": "30,52m2",
    "piso": 5,
    "dormitorios": 1,
    "amenities": ["laundry", "garage"],
    "pdf": "https:linkpdf",
    "img1": "images/planosApartamentos/uf502-702.png",
    "tipo": "monoambiente"
  },
  {
    "id": 0,
    "name": "UF 503",
    "superficie": "27,64m2",
    "piso": 5,
    "dormitorios": 1,
    "amenities": ["laundry", "garage"],
    "pdf": "https:linkpdf",
    "img1": "images/planosApartamentos/uf503-703.png",
    "tipo": "monoambiente"
  },
  {
    "id": 0,
    "name": "UF 504",
    "superficie": "45,39m2",
    "piso": 5,
    "dormitorios": 1,
    "amenities": ["laundry", "garage"],
    "pdf": "https:linkpdf",
    "img1": "images/planosApartamentos/uf504-704.png",
    "tipo": "monoambiente"
  },
  {
    "id": 0,
    "name": "UF 505",
    "superficie": "46,21m2",
    "piso": 5,
    "dormitorios": 1,
    "amenities": ["laundry", "garage"],
    "pdf": "https:linkpdf",
    "img1": "images/planosApartamentos/uf506-706.png",
    "tipo": "dosambientes"
  },
  {
    "id": 0,
    "name": "UF 506",
    "superficie": "30,62m2",
    "piso": 5,
    "dormitorios": 0,
    "amenities": ["laundry", "garage"],
    "pdf": "https:linkpdf",
    "img1": "images/planosApartamentos/uf506-706.png",
    "tipo": "monoambiente"
  },
  {
    "id": 0,
    "name": "UF 507",
    "superficie": "27,54m2",
    "piso": 5,
    "dormitorios": 0,
    "amenities": ["laundry", "garage"],
    "pdf": "https:linkpdf",
    "img1": "images/planosApartamentos/uf507-707.png",
    "tipo": "monoambiente"
  },
  {
    "id": 0,
    "name": "UF 508",
    "superficie": "47,63m2",
    "piso": 5,
    "dormitorios": 1,
    "amenities": ["laundry", "garage"],
    "pdf": "https:linkpdf",
    "img1": "images/planosApartamentos/uf508-708.png",
    "tipo": "dosambientes"
  },
  {
    "id": 0,
    "name": "UF 601",
    "superficie": "55,14m2",
    "piso": 6,
    "dormitorios": 1.5,
    "amenities": ["laundry", "garage"],
    "pdf": "https:linkpdf",
    "img1": "images/planosApartamentos/uf601.png",
    "tipo": "dosambientes"
  },
  {
    "id": 0,
    "name": "UF 602",
    "superficie": "27,29m2",
    "piso": 6,
    "dormitorios": 0,
    "amenities": ["laundry", "garage"],
    "pdf": "https:linkpdf",
    "img1": "images/planosApartamentos/uf602.png",
    "tipo": "monoambiente"
  },
  {
    "id": 0,
    "name": "UF 603",
    "superficie": "30,74m2",
    "piso": 6,
    "dormitorios": 0,
    "amenities": ["laundry", "garage"],
    "pdf": "https:linkpdf",
    "img1": "images/planosApartamentos/uf603.png",
    "tipo": "monoambiente"
  },
  {
    "id": 0,
    "name": "UF 604",
    "superficie": "48,43m2",
    "piso": 6,
    "dormitorios": 1,
    "amenities": ["laundry", "garage"],
    "pdf": "https:linkpdf",
    "img1": "images/planosApartamentos/uf604.png",
    "tipo": "dosambientes"
  },
  {
    "id": 0,
    "name": "UF 605",
    "superficie": "47,71m2",
    "piso": 6,
    "dormitorios": 1,
    "amenities": ["laundry", "garage"],
    "pdf": "https:linkpdf",
    "img1": "images/planosApartamentos/uf605.png",
    "tipo": "dosambientes"
  },
  {
    "id": 0,
    "name": "UF 606",
    "superficie": "30,04m2",
    "piso": 6,
    "dormitorios": 0,
    "amenities": ["laundry", "garage"],
    "pdf": "https:linkpdf",
    "img1": "images/planosApartamentos/uf606.png",
    "tipo": "monoambiente"
  },
  {
    "id": 0,
    "name": "UF 607",
    "superficie": "30,77m2",
    "piso": 6,
    "dormitorios": 0,
    "amenities": ["laundry", "garage"],
    "pdf": "https:linkpdf",
    "img1": "images/planosApartamentos/uf607.png",
    "tipo": "monoambiente"
  },
  {
    "id": 0,
    "name": "UF 608",
    "superficie": "44,47m2",
    "piso": 6,
    "dormitorios": 1,
    "amenities": ["laundry", "garage"],
    "pdf": "https:linkpdf",
    "img1": "images/planosApartamentos/uf608.png",
    "tipo": "dosambientes"
  },
  {
    "id": 0,
    "name": "UF 701",
    "superficie": "58,13m2",
    "piso": 7,
    "dormitorios": 1.5,
    "amenities": ["laundry", "garage"],
    "pdf": "https:linkpdf",
    "img1": "images/planosApartamentos/uf501-701.png",
    "tipo": "dosambientes"
  },
  {
    "id": 0,
    "name": "UF 702",
    "superficie": "30,52m2",
    "piso": 7,
    "dormitorios": 1,
    "amenities": ["laundry", "garage"],
    "pdf": "https:linkpdf",
    "img1": "images/planosApartamentos/uf502-702.png",
    "tipo": "monoambiente"
  },
  {
    "id": 0,
    "name": "UF 703",
    "superficie": "27,64m2",
    "piso": 7,
    "dormitorios": 0,
    "amenities": ["laundry", "garage"],
    "pdf": "https:linkpdf",
    "img1": "images/planosApartamentos/uf503-703.png",
    "tipo": "monoambiente"
  },
  {
    "id": 0,
    "name": "UF 704",
    "superficie": "45,39m2",
    "piso": 7,
    "dormitorios": 1,
    "amenities": ["laundry", "garage"],
    "pdf": "https:linkpdf",
    "img1": "images/planosApartamentos/uf504-704.png",
    "tipo": "dosambientes"
  },
  {
    "id": 0,
    "name": "UF 705",
    "superficie": "46,21m2",
    "piso": 7,
    "dormitorios": 1,
    "amenities": ["laundry", "garage"],
    "pdf": "https:linkpdf",
    "img1": "images/planosApartamentos/uf505-705.png",
    "tipo": "dosambientes"
  },
  {
    "id": 0,
    "name": "UF 706",
    "superficie": "30,62m2",
    "piso": 7,
    "dormitorios": 0,
    "amenities": ["laundry", "garage"],
    "pdf": "https:linkpdf",
    "img1": "images/planosApartamentos/uf506-706.png",
    "tipo": "monoambiente"
  },
  {
    "id": 0,
    "name": "UF 707",
    "superficie": "27,54m2",
    "piso": 7,
    "dormitorios": 0,
    "amenities": ["laundry", "garage"],
    "pdf": "https:linkpdf",
    "img1": "images/planosApartamentos/uf507-707.png",
    "tipo": "monoambiente"
  },
  {
    "id": 0,
    "name": "UF 708",
    "superficie": "47,63m2",
    "piso": 7,
    "dormitorios": 1,
    "amenities": ["laundry", "garage"],
    "pdf": "https:linkpdf",
    "img1": "images/planosApartamentos/uf508-708.png",
    "tipo": "dosambientes"
  },
  {
    "id": 0,
    "name": "UF 801",
    "superficie": "55,15m2",
    "piso": 8,
    "dormitorios": 1.5,
    "amenities": ["laundry", "garage"],
    "pdf": "https:linkpdf",
    "img1": "images/planosApartamentos/uf101-401-801.png",
    "tipo": "dosambientes"
  },
  {
    "id": 0,
    "name": "UF 802",
    "superficie": "30,50m2",
    "piso": 1,
    "dormitorios": 0,
    "amenities": ["laundry", "garage"],
    "pdf": "https:linkpdf",
    "img1": "images/planosApartamentos/uf102-402-802.png",
    "tipo": "monoambiente"
  },
  {
    "id": 0,
    "name": "UF 803",
    "superficie": "30,66m2",
    "piso": 8,
    "dormitorios": 0,
    "amenities": ["laundry", "garage"],
    "pdf": "https:linkpdf",
    "img1": "images/planosApartamentos/uf103-403-803.png",
    "tipo": "dosambientes"
  },
  {
    "id": 0,
    "name": "UF 804",
    "superficie": "48,43m2",
    "piso": 8,
    "dormitorios": 1,
    "amenities": ["laundry", "garage"],
    "pdf": "https:linkpdf",
    "img1": "images/planosApartamentos/uf104-404-804.png",
    "tipo": "dosambientes"
  },
  {
    "id": 0,
    "name": "UF 805",
    "superficie": "47,71m2",
    "piso": 8,
    "dormitorios": 1,
    "amenities": ["laundry", "garage"],
    "pdf": "https:linkpdf",
    "img1": "images/planosApartamentos/uf105-405-805.png",
    "tipo": "dosambientes"
  },
  {
    "id": 0,
    "name": "UF 806",
    "superficie": "27,54m2",
    "piso": 8,
    "dormitorios": 0,
    "amenities": ["laundry", "garage"],
    "pdf": "https:linkpdf",
    "img1": "images/planosApartamentos/uf106-406-806.png",
    "tipo": "monoambiente"
  },
  {
    "id": 0,
    "name": "UF 807",
    "superficie": "30,62m2",
    "piso": 8,
    "dormitorios": 0,
    "amenities": ["laundry", "garage"],
    "pdf": "https:linkpdf",
    "img1": "images/planosApartamentos/uf107-407-807.png",
    "tipo": "monoambiente"
  },
  {
    "id": 0,
    "name": "UF 808",
    "superficie": "46,54m2",
    "piso": 8,
    "dormitorios": 1,
    "amenities": ["laundry", "garage"],
    "pdf": "https:linkpdf",
    "img1": "images/planosApartamentos/uf108-408-808.png",
    "tipo": "dosambientes"
  },
  {
    "id": 0,
    "name": "UF 901",
    "superficie": "58,13m2",
    "piso": 9,
    "dormitorios": 1.5,
    "amenities": ["laundry", "garage"],
    "pdf": "https:linkpdf",
    "img1": "images/planosApartamentos/uf301-901.png",
    "tipo": "dosambientes"
  },
  {
    "id": 0,
    "name": "UF 902",
    "superficie": "30,52m2",
    "piso": 9,
    "dormitorios": 0,
    "amenities": ["laundry", "garage"],
    "pdf": "https:linkpdf",
    "img1": "images/planosApartamentos/uf302-902.png",
    "tipo": "monoambiente"
  },
  {
    "id": 0,
    "name": "UF 903",
    "superficie": "27,67m2",
    "piso": 9,
    "dormitorios": 0,
    "amenities": ["laundry", "garage"],
    "pdf": "https:linkpdf",
    "img1": "images/planosApartamentos/uf303-903.png",
    "tipo": "monoambiente"
  },
  {
    "id": 0,
    "name": "UF 904",
    "superficie": "46,37m2",
    "piso": 9,
    "dormitorios": 0,
    "amenities": ["laundry", "garage"],
    "pdf": "https:linkpdf",
    "img1": "images/planosApartamentos/uf304-904.png",
    "tipo": "dosambientes"
  },
  {
    "id": 0,
    "name": "UF 905",
    "superficie": "44,35m2",
    "piso": 9,
    "dormitorios": 1,
    "amenities": ["laundry", "garage"],
    "pdf": "https:linkpdf",
    "img1": "images/planosApartamentos/uf305-905.png",
    "tipo": "dosambientes"
  },
  {
    "id": 0,
    "name": "UF 906",
    "superficie": "30,77m2",
    "piso": 9,
    "dormitorios": 0,
    "amenities": ["laundry", "garage"],
    "pdf": "https:linkpdf",
    "img1": "images/planosApartamentos/uf306-906.png",
    "tipo": "monoambiente"
  },
  {
    "id": 0,
    "name": "UF 907",
    "superficie": "30,74m2",
    "piso": 9,
    "dormitorios": 0,
    "amenities": ["laundry", "garage"],
    "pdf": "https:linkpdf",
    "img1": "images/planosApartamentos/uf307-907.png",
    "tipo": "monoambiente"
  },
  {
    "id": 0,
    "name": "UF 908",
    "superficie": "45,45m2",
    "piso": 9,
    "dormitorios": 1,
    "amenities": ["laundry", "garage"],
    "pdf": "https:linkpdf",
    "img1": "images/planosApartamentos/uf308-908.png",
    "tipo": "dosambientes"
  },
  /*
  {
  "name": "UF 305",
  "superficie": "50m2",
  "piso": 1,
  "dormitorios": 3,
  "amenities": ["laundry", "garage"],
  "pdf": "https:linkpdf",
  "img1": "https://images.adsttc.com/media/images/5ca6/130c/284d/d1a3/1e00/02fb/large_jpg/2018.03.03_Starship_Landing_Luna_Plan.jpg?1554387716",
  "tipo": "monoambiente"
  },
  {
  "name": "UF 306",
  "superficie": "50m2",
  "piso": 1,
  "dormitorios": 3,
  "amenities": ["laundry", "garage"],
  "pdf": "https:linkpdf",
  "img1": "https://images.adsttc.com/media/images/5ca6/130c/284d/d1a3/1e00/02fb/large_jpg/2018.03.03_Starship_Landing_Luna_Plan.jpg?1554387716",
  "tipo": "dosambientes"
  },
  {
  "id": "UF307",
  "superficie": "50m2",
  "piso": 1,
  "dormitorios": 3,
  "amenities": ["laundry", "garage"],
  "pdf": "https:linkpdf",
  "img1": "https://images.adsttc.com/media/images/5ca6/130c/284d/d1a3/1e00/02fb/large_jpg/2018.03.03_Starship_Landing_Luna_Plan.jpg?1554387716",
  "tipo": "tresambientes"
  }*/
  ]
/* let apartments = [
    {
      imagen: 'https://lumen.uv.mx/recursoseducativos/PlanosArquitectonicos/img/escritorio/conceptos/planosinstalaciones4.png',
      name: "UF 305",
      sizes: '65.43',
      unit: 'M2',
      characteristics: [
        '2do piso',
        '2 dormitorios'
      ],
      id: 0,
    },
    {
      imagen: 'https://lumen.uv.mx/recursoseducativos/PlanosArquitectonicos/img/escritorio/conceptos/planosinstalaciones4.png',
      name: "UF 305",
      sizes: '65.43',
      unit: 'M2',
      characteristics: [
        '2do piso',
        '2 dormitorios'
      ],
      id: 1,
    },
    {
      imagen: 'https://lumen.uv.mx/recursoseducativos/PlanosArquitectonicos/img/escritorio/conceptos/planosinstalaciones4.png',
      name: "UF 305",
      sizes: '65.43',
      unit: 'M2',
      characteristics: [
        '2do piso',
        '2 dormitorios'
      ],
      id: 2,
    },
    {
      imagen: 'https://lumen.uv.mx/recursoseducativos/PlanosArquitectonicos/img/escritorio/conceptos/planosinstalaciones4.png',
      name: "UF 305",
      sizes: '65.43',
      unit: 'M2',
      characteristics: [
        '2do piso',
        '2 dormitorios'
      ],
      id: 3,
    },
    {
      imagen: 'https://lumen.uv.mx/recursoseducativos/PlanosArquitectonicos/img/escritorio/conceptos/planosinstalaciones4.png',
      name: "UF 305",
      sizes: '65.43',
      unit: 'M2',
      characteristics: [
        '2do piso',
        '2 dormitorios'
      ],
      id: 4,
    },
  ]; */
  
  export function getApartments() {
    return apartments;
  }

  export function getApartment(id) {
    return apartments.find(
      (apartment) => apartment.id === id
    );
  }
