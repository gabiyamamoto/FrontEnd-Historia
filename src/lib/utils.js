export function romano(numero) {
    const valor = Number(numero);

    if (!Number.isInteger(valor) || valor < 1 || valor > 3999) {
        return "";
    }

    const milhares = ["", "M", "MM", "MMM"];
    const centenas = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    const dezenas = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    const unidades = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    return (
        milhares[Math.floor(valor / 1000)] +
        centenas[Math.floor((valor % 1000) / 100)] +
        dezenas[Math.floor((valor % 100) / 10)] +
        unidades[valor % 10]
    );
}