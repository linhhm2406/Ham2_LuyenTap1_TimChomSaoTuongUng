let star_name = ['Polaris', 'Aldebaran', 'Deneb', 'Vega', 'Altair', 'Dubhe', 'Regulus'];

let constellation_name = ['Ursa Minor', 'Taurus', 'Cygnus', 'Lyra', 'Aquila', 'Ursa Major', 'Leo'];

function find_star_name(str) {
    let result;
    for (let i = 0; i < star_name.length; i++) {
        if (str === star_name[i]) {
            result = constellation_name[i];
            break;
        } else {
            result = 'Khong co ket qua chom sao tuong ung';
        }
    }
    return alert(result);
}