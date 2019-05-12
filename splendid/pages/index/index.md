# Art Deco Code

This is the collection of links to our software.

<ul>
  * ``Documentary``: documentation pre-processor with example and output embedding, JSX components, tables of content and more. <github-badge name="documentary" org="artdecocode" /> <npm-badge package="documentary">_Documentary_</npm-badge> <br/> [https://readme.page](https://readme.page)
  * ``Usually``: the library to show users how to use CLI programs, which prints description, overall line, an example and a description of each individual flag. Integrates with _Argufy_ to read auto-generated usage based on the arguments information stored in <strong>arguments.xml</strong> file. <github-badge name="usually" org="artdecocode" /> <npm-badge package="usually">_Usually_</npm-badge>
  * ``Argufy``: the library to parse command-line arguments to CLI programs according to a configuration object. Supports short-hand flags, boolean/numbers, commands (arguments without a flag) and multiple commands. It is also a command-line utility that allows to store arguments in <strong>arguments.xml</strong> file for automatic generation of a JavaScript file that exports extracted arguments that is compatible with _Google Closure Compiler_. Compatible with _Documentary_ that prints all arguments in a table. <github-badge name="argufy" org="artdecocode" /> <npm-badge package="argufy">_Argufy_</npm-badge>
  * ``Depack``: the module bundler for Node.JS and front-end JavaScript programs using _Google Closure Compiler_. <github-badge name="depack" org="dpck" /> <npm-badge package="depack">_Depack_</npm-badge>
  * ``Typal``: The types management system that keeps typedefs in a separate `types.xml` file (or multiple files) and allows to embed them into JavaScript files in the format understood both by _VSCode_ and _Google Closure Compiler_. Also generates externs for _GCC_ and allows to place markdown tables into `README.md` documentation when used with _Documentary_. <github-badge name="artdecocode" org="typal" /> <npm-badge package="typal">_Typal_</npm-badge><br/>[https://typedef.page](https://typedef.page)
  * ``@Goa/Koa``: The Koa2 web-server compiled with Google Closure Compiler to prove the concept that it is now possible to put all 30 dependencies of a package together and distribute them as a single source code file. The single left dependency is `mime-db` so that upgrades to that package automatically propagate the the server. <github-badge name="koa" org="idiocc" /> <npm-badge package="@goa/koa">_@Goa/Koa_</npm-badge>
</ul>

<section-break/>