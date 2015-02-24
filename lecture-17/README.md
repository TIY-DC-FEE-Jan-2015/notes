## Tuesday, February 24th

#### Today we learned:

* How the `this` variable in JavaScript gets set
    * Default: global context (`window`)
    * As part of a constructor (`new ClassName()`)
    * As part of an object or array (`obj.b()`)
    * Override: with `.call(context, params..)`
* Lots of practice with object-oriented code
    * Creating accessor methods (`League.sortedTeams()`, `Team.winPct()` etc)
    * Encapsulating input (`Team.addWin()`, `League.addTeam()` etc)
* Error throwing and handling
    * `try { somethingBroken() } catch (exception) { }`
    * `throw new Error("message for devs")`
* Handlebars template edge cases