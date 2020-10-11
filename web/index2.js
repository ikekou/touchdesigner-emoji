(async ()=>{
    const dataId = location.search.split('?')[1].split('=')[1];
    console.log('dataId',dataId);
    const res = await fetch(`data${dataId}.txt`);
    const txt = await res.text();
    document.querySelector('.test').innerText = txt;
})();