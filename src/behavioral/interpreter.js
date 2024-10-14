/**
 * The interpreter pattern is used to interpret the grammar for a simple
 * language. The language is defined by an object structure (this is the reason the grammar for
 * the language needs to be very simple; otherwise, the object inheritance tree would become
 * unmanageably large).
 *
 * In this example, we have a simple language that can be used to evaluate arithmetic expressions. In a practical
 * example, there would be a parser that would parse the expression and create the object structure that represents
 * the expression. For the sake of this example, we will manually create the object structure.
 *
 * Because we do not have interface in JavaScript, and a prototype would not be useful, as none
 * of the objects share implementations, we will use duck typing to ensure that the objects
 * have the same methods.
 *
 * We do not need to create a context for this example as we do not use variables in the expressions. so we
 * do not need a context to store the variables. We also do not have a parser, as we are not parsing a string
 * into an expression tree. We are creating the expression via instantiation. This simplifies the example and
 * demonstrates the core concept of the interpreter pattern.
 */

function AdditionExpression(leftOperand, rightOperand) {
    return {
        leftOperand,
        rightOperand,
        interpret: function () {
            return this.leftOperand.interpret() + this.rightOperand.interpret()
        },
        replace: function (number, expression) {
            return new AdditionExpression(
                this.leftOperand.replace(number, expression),
                this.rightOperand.replace(number, expression)
            )
        },
        copy: function () {
            return new AdditionExpression(
                this.leftOperand.copy(),
                this.rightOperand.copy()
            )
        },
    }
}

function SubtractionExpression(leftOperand, rightOperand) {
    return {
        leftOperand,
        rightOperand,
        interpret: function () {
            return this.leftOperand.interpret() - this.rightOperand.interpret()
        },
        replace: function (number, expression) {
            return new SubtractionExpression(
                this.leftOperand.replace(number, expression),
                this.rightOperand.replace(number, expression)
            )
        },
        copy: function () {
            return new SubtractionExpression(
                this.leftOperand.copy(),
                this.rightOperand.copy()
            )
        },
    }
}

function MultiplicationExpression(leftOperand, rightOperand) {
    return {
        leftOperand,
        rightOperand,
        interpret: function () {
            return this.leftOperand.interpret() * this.rightOperand.interpret()
        },
        replace: function (number, expression) {
            return new MultiplicationExpression(
                this.leftOperand.replace(number, expression),
                this.rightOperand.replace(number, expression)
            )
        },
        copy: function () {
            return new MultiplicationExpression(
                this.leftOperand.copy(),
                this.rightOperand.copy()
            )
        },
    }
}

function DivisionExpression(leftOperand, rightOperand) {
    return {
        leftOperand,
        rightOperand,
        interpret: function () {
            return this.leftOperand.interpret() / this.rightOperand.interpret()
        },
        replace: function (number, expression) {
            return new DivisionExpression(
                this.leftOperand.replace(number, expression),
                this.rightOperand.replace(number, expression)
            )
        },
        copy: function () {
            return new DivisionExpression(
                this.leftOperand.copy(),
                this.rightOperand.copy()
            )
        },
    }
}

function NumberExpression(number) {
    return {
        number,
        interpret: function () {
            return this.number
        },
        replace: function (number, expression) {
            if (this.number === number) {
                return expression.copy()
            }
            return this.copy()
        },
        copy: function () {
            return new NumberExpression(this.number)
        },
    }
}

// Usage

const expression = new SubtractionExpression( // expression is 25/5(16+8/-4)-8
    new DivisionExpression(
        new NumberExpression(25),
        new MultiplicationExpression(
            new NumberExpression(5),
            new AdditionExpression(
                new NumberExpression(16),
                new DivisionExpression(
                    new NumberExpression(-8),
                    new NumberExpression(4)
                )
            )
        )
    ),
    new NumberExpression(8)
)
console.log(expression.interpret()) // approx -7.6429...

const newExpression = expression.replace(16, new NumberExpression(30))
console.log(newExpression.interpret()) // approx -7.8214...
