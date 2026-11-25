// Общие данные: объекты недвижимости и агенты.
// Используются на страницах catalog.html и property.html.

window.AGENTS = [
    { name: 'Daniel Carter', photo: 1, phone: '+1 555 010 1001', female: false },
    { name: 'James Mitchell', photo: 2, phone: '+1 555 010 1002', female: false },
    { name: 'Olivia Barnes', photo: 3, phone: '+1 555 010 1003', female: true }
];

// floor — этаж (только для квартир), lot — участок в м² (для домов и вилл)
window.PROPERTIES = [
    { id: 1, type: 'house', loc: 'downtown', price: 340000, beds: 4, baths: 3, area: 260, year: 2022, parking: 2, lot: 620, address: '123 Luxury Avenue, New York, NY 10001', agent: 0 },
    { id: 2, type: 'villa', loc: 'seaside', price: 890000, beds: 5, baths: 4, area: 410, year: 2021, parking: 3, lot: 1450, address: '48 Ocean Drive, Miami Beach, FL 33139', agent: 2 },
    { id: 3, type: 'apartment', loc: 'downtown', price: 275000, beds: 2, baths: 1, area: 95, year: 2019, parking: 1, floor: 7, address: '210 Market Street, Chicago, IL 60606', agent: 1 },
    { id: 4, type: 'house', loc: 'suburbs', price: 420000, beds: 4, baths: 3, area: 260, year: 2020, parking: 2, lot: 780, address: '15 Maple Grove Lane, Austin, TX 78701', agent: 0 },
    { id: 5, type: 'villa', loc: 'seaside', price: 1250000, beds: 6, baths: 5, area: 520, year: 2023, parking: 4, lot: 2100, address: '900 Skyline Boulevard, Los Angeles, CA 90028', agent: 2 },
    { id: 6, type: 'apartment', loc: 'downtown', price: 365000, beds: 3, baths: 2, area: 130, year: 2021, parking: 1, floor: 12, address: '77 Garden Court, Boston, MA 02116', agent: 1 },
    { id: 7, type: 'house', loc: 'downtown', price: 510000, beds: 3, baths: 2, area: 190, year: 2018, parking: 1, lot: 340, address: '31 Union Square West, New York, NY 10003', agent: 0 },
    { id: 8, type: 'apartment', loc: 'seaside', price: 450000, beds: 2, baths: 2, area: 110, year: 2022, parking: 1, floor: 4, address: '5 Harbor View Road, San Diego, CA 92101', agent: 1 },
    { id: 9, type: 'villa', loc: 'suburbs', price: 760000, beds: 5, baths: 4, area: 380, year: 2020, parking: 3, lot: 1650, address: '64 Hillcrest Road, Denver, CO 80202', agent: 2 },
    { id: 10, type: 'house', loc: 'seaside', price: 640000, beds: 4, baths: 3, area: 300, year: 2019, parking: 2, lot: 900, address: '22 Coastal Highway, Malibu, CA 90265', agent: 0 },
    { id: 11, type: 'apartment', loc: 'suburbs', price: 198000, beds: 1, baths: 1, area: 64, year: 2017, parking: 1, floor: 2, address: '8 Willow Street, Portland, OR 97201', agent: 1 },
    { id: 12, type: 'villa', loc: 'downtown', price: 980000, beds: 5, baths: 5, area: 450, year: 2024, parking: 3, lot: 1100, address: '1 Park Avenue Tower, New York, NY 10016', agent: 2 }
];