/**
 * Demo: Exploring Modern JavaScript Features
 * 
 * This file demonstrates various modern JavaScript features
 * that you can experiment with using GitHub Copilot in VS Code Codespaces.
 */

// 1. ES6+ Arrow Functions
const greet = (name) => `Hello, ${name}!`;

// 2. Template Literals
const createMessage = (user, action) => {
    return `User ${user} performed action: ${action} at ${new Date().toISOString()}`;
};

// 3. Destructuring
const getUserInfo = (user) => {
    const { name, email, role = 'guest' } = user;
    return { name, email, role };
};

// 4. Spread Operator
const mergeConfigs = (defaultConfig, customConfig) => {
    return { ...defaultConfig, ...customConfig };
};

// 5. Async/Await Pattern
const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

// 6. Array Methods (map, filter, reduce)
const processNumbers = (numbers) => {
    const doubled = numbers.map(n => n * 2);
    const evens = numbers.filter(n => n % 2 === 0);
    const sum = numbers.reduce((acc, n) => acc + n, 0);
    return { doubled, evens, sum };
};

// 7. Classes and Object-Oriented Programming
class Calculator {
    constructor(initialValue = 0) {
        this.value = initialValue;
    }

    add(n) {
        this.value += n;
        return this;
    }

    subtract(n) {
        this.value -= n;
        return this;
    }

    multiply(n) {
        this.value *= n;
        return this;
    }

    getResult() {
        return this.value;
    }
}

// Demo execution
console.log('=== Modern JavaScript Demo ===\n');

// Test greeting
console.log('1. Arrow Function:', greet('Developer'));

// Test message creation
console.log('2. Template Literal:', createMessage('Alice', 'login'));

// Test destructuring
const user = { name: 'Bob', email: 'bob@example.com' };
console.log('3. Destructuring:', getUserInfo(user));

// Test spread operator
const config = mergeConfigs({ debug: false, timeout: 1000 }, { debug: true });
console.log('4. Spread Operator:', config);

// Test array methods
const numbers = [1, 2, 3, 4, 5];
console.log('5. Array Methods:', processNumbers(numbers));

// Test Calculator class
const calc = new Calculator(10);
const result = calc.add(5).multiply(2).subtract(3).getResult();
console.log('6. Class (Calculator):', result);

console.log('\n=== Demo Complete ===');
