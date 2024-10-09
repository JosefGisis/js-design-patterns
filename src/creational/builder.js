/**
 * The builder design pattern seperates the construction of a complex object from its representation.
 * This allows greater flexibility and control over the construction process and allows quick changes to the
 * object being built.
 *
 * Below is an example of an object director that uses an object builder to create objects.
 * The object director is responsible for the construction of the object and the object builder is responsible
 * for the representation of the object. Notice how the flexibility of the builder pattern allows for the construction 
 * of the survey object to be easily changed by changing the object builder.
 * SurveyJS is an automated form generator that uses a complex object to construct forms.
 */


// ObjectDirector also uses the singleton pattern to ensure that only one instance of the object director is created. See src/creational/singleton.ts
