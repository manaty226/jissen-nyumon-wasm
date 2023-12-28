
const valueA = document.querySelector("#value-a");
const valueB = document.querySelector("#value-b");

const getValueA = () => parseInt(valueA.value) || 0;
const getValueB = () => parseInt(valueB.value) || 0;

const imports = {
    wasm: (await WebAssembly.instantiateStreaming(fetch("import.wasm"))).instance?.exports,
    js: {
        display(v) { alert(`${getValueA()} + ${getValueB()} = ${v}`)}
    }
}

const wasm = await (async () => {
    const {instance} = await WebAssembly.instantiateStreaming(fetch("calc.wasm"), imports);
    return instance?.exports;
})();

document.querySelector("#action-calculate")?.addEventListener("click", () => {
    const a = parseInt(valueA.value) || 0;
    const b = parseInt(valueB.value) || 0;
    wasm?.calc(a, b);
});