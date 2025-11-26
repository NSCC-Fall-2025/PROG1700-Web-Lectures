
if (Deno.args.length <= 0) {
    Deno.exit(-1);
}

const emojis: Record<string, string> = {
    'purpleheart': '\u{1F49C}',
    'snowman': '\u{2603}',
    'santa': '\u{1F385}',
    'tree': '\u{1F384}',
    'chocolate': '\u{1F4A9}'
};

for (const arg of Deno.args) {
    console.log(emojis[arg]);
}