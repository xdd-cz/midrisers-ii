const students = [
    {
        name: 'john',
        paidStatus: true,
        scholarship: true,
    },
    {
        name: 'Amys',
        paidStatus: false,
        scholarship: false,
    },
    {
        name: 'Bob',
        paidStatus: true,
        scholarship: false,
    },
];

students.forEach((s) => {
    if(s.paidStatus && s.scholarship) {
        console.log(`${s.name} can give exam `);
    } else {
        console.log(`${s.name} can't give exam `);
    }
});

students.map((s) => {
    if(s.paidStatus && s.scholarship) {
        console.log(`${s.name} can give exam `);
    } else {
        console.log(`${s.name} can't give exam `);
    }
});

for (let i = 0; i < students.length; i++) {
    const s = students[i]
    if(s.paidStatus && s.scholarship) {
        console.log(`${s.name} can give exam `);
    } else {
        console.log(`${s.name} can't give exam `);
    }
};