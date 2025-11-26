
function insertData() {

    const records: [string, string, string][] = [
        ['W111222', 'jane', 'doe'],
        ['W222333', 'jack', 'sprat'],
        ['W333444', 'slim', 'jim'],
        ['W444555', 'jill', 'hill']
    ];

    for (const r of records) {
        const line = `${r[0]},${r[1]},${r[2]}\n`;
        Deno.writeTextFileSync('crappydb.csv', line, { append: true });
    }
}

function selectData() {

}

function updateData() {
    // read all records into an array
    const records = Deno.readTextFileSync('crappydb.csv').split('\r\n');

    Deno.writeTextFileSync('crappydb.csv', '');
    for (let i = 0; i < records.length; i++) {
        const [id, first, _last] = records[i].split(',');
        if (id === 'W111222') {
            const updated = `${id},${first},smith\n`;
            Deno.writeTextFileSync('crappydb.csv', updated, { append: true });
        } else {
            Deno.writeTextFileSync('crappydb.csv', `${records[i]}\n`, { append: true });
        }
    }
}

function deleteData() {

}

insertData();
updateData();