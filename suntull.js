const domain = [1, 2, 3, 4, 5];

const result = domain.map(v => {
    // Transform each element v in some way.
    return v * 2;
});

console.log(result); // Output: [2, 4, 6, 8, 10]
