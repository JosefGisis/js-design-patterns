/**
 * Factory Method is a creational design pattern that provides an interface for creating objects in a superclass
 * , but allows subclasses to alter the type of objects that will be created. This is important when the particular
 * object that will be created is not known. The abstract factory delegate the responsibility of creating objects to
 * its subclasses.
 *
 * An example would be a shoe factory. The abstract class knows that it requires leather, lace, glue and rubber to
 * make the shoe. However, the type of leather, lace, glue and rubber is not known. The subclasses of the factory
 * will provide the type of leather, lace, glue and rubber to be used, as well as the style of shoe.
 */
