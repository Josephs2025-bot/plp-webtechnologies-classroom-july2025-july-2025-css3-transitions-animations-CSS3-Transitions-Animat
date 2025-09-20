// Part 2: JavaScript Functions - Scope, Parameters & Return Values

// Global variables
const globalMessage = "I'm a global variable";

// Function with parameters and return value
function calculateSum(a, b) {
    // Local variables - only accessible within this function
    const localMessage = "Calculating sum...";
    console.log(localMessage);
    
    // Return the sum of parameters
    return a + b;
}

// Function demonstrating different operations
function multiplyNumbers(a, b) {
    return a * b;
}

// Function to reverse a string
function reverseString(str) {
    // Convert to string to handle numbers if passed
    const text = String(str);
    return text.split('').reverse().join('');
}

// Function to convert to uppercase
function toUppercase(str) {
    return String(str).toUpperCase();
}

// Function to count characters
function countCharacters(str) {
    return String(str).length;
}

// Function demonstrating scope
function demonstrateScope() {
    // This variable is local to this function
    const localVar = "I'm local to demonstrateScope function";
    
    // We can access the global variable
    console.log(globalMessage);
    
    // Trying to access a variable from another function would cause an error
    // console.log(localMessage); // This would cause ReferenceError
    
    return {
        global: globalMessage,
        local: localVar
    };
}

// Part 3: Combining CSS Animations with JavaScript

// Function to toggle animation on the box
function toggleBoxAnimation() {
    const box = document.getElementById('animated-box');
    box.classList.toggle('animate');
    
    // If we're removing the animation, set a timeout to allow re-triggering
    if (!box.classList.contains('animate')) {
        setTimeout(() => {
            box.style.animation = 'none';
            // Trigger reflow
            void box.offsetWidth;
            box.style.animation = null;
        }, 500);
    }
}

// Function to flip the card
function flipCard() {
    const card = document.getElementById('flip-card');
    card.classList.toggle('flipped');
}

// Function to control the loader animation
function toggleLoader(action) {
    const loader = document.getElementById('loader');
    
    if (action === 'start') {
        loader.classList.add('active');
    } else {
        loader.classList.remove('active');
    }
}

// Function to show modal
function showModal() {
    const modal = document.getElementById('modal');
    modal.classList.add('active');
    
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
}

// Function to hide modal
function hideModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('active');
    
    // Restore body scrolling
    document.body.style.overflow = 'auto';
}

// DOMContentLoaded event to ensure the DOM is fully loaded before attaching events
document.addEventListener('DOMContentLoaded', function() {
    // Part 2: JavaScript Functions event listeners
    
    // Calculate button
    document.getElementById('calculate').addEventListener('click', function() {
        const num1 = parseFloat(document.getElementById('num1').value) || 0;
        const num2 = parseFloat(document.getElementById('num2').value) || 0;
        
        const sum = calculateSum(num1, num2);
        const product = multiplyNumbers(num1, num2);
        
        document.getElementById('math-result').innerHTML = `
            Sum: ${sum} <br>
            Product: ${product}
        `;
    });
    
    // Scope demonstration button
    document.getElementById('scope-demo').addEventListener('click', function() {
        const scopeResult = demonstrateScope();
        document.getElementById('scope-result').innerHTML = `
            Global: ${scopeResult.global} <br>
            Local: ${scopeResult.local}
        `;
    });
    
    // Text manipulation buttons
    document.getElementById('reverse-btn').addEventListener('click', function() {
        const inputText = document.getElementById('text-input').value;
        const reversed = reverseString(inputText);
        document.getElementById('text-result').textContent = reversed;
    });
    
    document.getElementById('uppercase-btn').addEventListener('click', function() {
        const inputText = document.getElementById('text-input').value;
        const uppercase = toUppercase(inputText);
        document.getElementById('text-result').textContent = uppercase;
    });
    
    document.getElementById('count-btn').addEventListener('click', function() {
        const inputText = document.getElementById('text-input').value;
        const count = countCharacters(inputText);
        document.getElementById('text-result').textContent = `Character count: ${count}`;
    });
    
    // Part 3: Combining CSS and JavaScript event listeners
    
    // Animate box button
    document.getElementById('animate-box-btn').addEventListener('click', toggleBoxAnimation);
    
    // Flip card button
    document.getElementById('flip-card-btn').addEventListener('click', flipCard);
    
    // Loader controls
    document.getElementById('start-loader').addEventListener('click', function() {
        toggleLoader('start');
    });
    
    document.getElementById('stop-loader').addEventListener('click', function() {
        toggleLoader('stop');
    });
    
    // Modal controls
    document.getElementById('open-modal').addEventListener('click', showModal);
    document.getElementById('close-modal').addEventListener('click', hideModal);
    
    // Close modal if clicked outside content
    document.getElementById('modal').addEventListener('click', function(e) {
        if (e.target === this) {
            hideModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            hideModal();
        }
    });
});

// Additional comments for learning:
// 1. Functions are reusable blocks of code that can take parameters and return values
// 2. Variables declared outside functions have global scope
// 3. Variables declared inside functions have local scope and can't be accessed outside
// 4. We use DOM manipulation to interact with page elements
// 5. JavaScript can add/remove CSS classes to trigger animations
// 6. Event listeners respond to user interactions