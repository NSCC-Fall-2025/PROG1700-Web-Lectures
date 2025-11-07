import { assert, assertEquals } from "jsr:@std/assert";

Deno.test("check some dictionary values", () => {

    const student = {
        name: 'Jack',
        id: 'W123456',
        phone: '902-555-1212'
    };

    assert(student.name !== null, "name should exist");
    assertEquals(student.id, "W123456", "id must be W123456");
    assertEquals(student.phone, "555-1212", "phone number must be 555-1212");
});