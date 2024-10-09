/**
 * The interpreter pattern is used to interpret the grammar for a simple
 * language. The language is defined by an object structure (this is the reason the grammar for
 * the language needs to be very simple; otherwise, the object inheritance tree would become
 * unmanageably large) and a parser goes through the expression and interprets it.
 *
 * In this example, we have a simple language that can be used to evaluate boolean expressions. In a practical
 * example, there would be a parser that would parse the expression and create the object structure that represents
 * the expression. For the sake of this example, we will manually create the object structure.
 *
 * Because this example requires a larger setup than the other examples, it is split into multiple files.
 */