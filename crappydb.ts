
export function insertData() {

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

export function selectData() {
    // read all records into an array
    const records = Deno.readTextFileSync('crappydb.csv').split('\n');

    for (let i = 0; i < records.length - 1; i++) {
        const [id, first, last] = records[i].split(',');
        if (first[0] === 'j') {
            console.log(`ID: ${id}, Name: ${first} ${last}`);
        }
    }
}

export function updateData() {
    // read all records into an array
    const records = Deno.readTextFileSync('crappydb.csv').split('\n');

    Deno.writeTextFileSync('crappydb.csv', '');
    for (let i = 0; i < records.length - 1; i++) {
        const [id, first, _last] = records[i].split(',');
        if (id === 'W111222') {
            const updated = `${id},${first},smith\n`;
            Deno.writeTextFileSync('crappydb.csv', updated, { append: true });
        } else {
            Deno.writeTextFileSync('crappydb.csv', `${records[i]}\n`, { append: true });
        }
    }
}
export function updateData2() {
    // read all records into an array
    const records = Deno.readTextFileSync('crappydb.csv').split('\n');

    for (let i = 0; i < records.length - 1; i++) {
        const [id, first, _last] = records[i].split(',');
        if (id === 'W222333') {
            records[i] = `${id},${first},smith`;
        }
    }

    // join all records into a single block of text to write
    const contents = records.join('\n');
    Deno.writeTextFileSync('crappydb.csv', contents);
}

export function deleteData() {

    const recordsToDelete: string[] = ['W111222', 'W222333', 'W333444'];

    // read all records into an array
    const records = Deno.readTextFileSync('crappydb.csv').split('\n');

    let recordsToWrite = [];
    for (let i = 0; i < records.length - 1; i++) {
        const [id, first, last] = records[i].split(',');
        if (!recordsToDelete.includes(id)) {
            recordsToWrite.push(`${id},${first},${last}`);
        }
    }

    // join all records into a single block of text to write
    const contents = recordsToWrite.join('\n') + '\n';
    Deno.writeTextFileSync('crappydb.csv', contents);
}

if (import.meta.main) {
    deleteData();
    insertData();
    updateData2();
    selectData();
}