## dev_compiler bug test

This is just a `dev_compiler` bug test.

## Bug

The `example_error.dart` shows a code that can't be compiled by `dartdevc`
(package `dev_compiler` @ https://github.com/dart-lang/sdk/blob/main/pkg/dev_compiler)

The main issue is to emmit a `FutureOr<T>` to be returned by a `closure/local` function.

NOTE: The example code is just to isolate the compiler error and is not a useful code.

## Running examples:

```shell
dartdevc -o example/example_error.js example/example_error.dart
```

```shell
dartdevc -o example/example_ok.js example/example_ok.dart 
```

## Diff

Difference between codes:

```shell
diff example/example_error.dart example/example_ok.dart 
```

## Error output

Exception line:

https://github.com/dart-lang/sdk/blob/main/pkg/dev_compiler/lib/src/kernel/compiler.dart#L3056

### Dart 2.16.1

```text
$> dartdevc -o example/example_error.js example/example_error.dart
We're sorry, you've found a bug in our compiler.
You can report this bug at:
    https://github.com/dart-lang/sdk/issues/labels/web-dev-compiler
Please include the information below in your report, along with
any other information that may help us track it down. Thanks!
-------------------- %< --------------------
    dartdevc -k arguments: -o example/example_error.js example/example_error.dart
    dart --version: 2.16.1 (stable) (Tue Feb 8 12:02:33 2022 +0100) on "macos_x64"

Unsupported operation: Undetermined Nullability
#0      ProgramCompiler._emitFutureOrType (package:dev_compiler/src/kernel/compiler.dart:3057:7)
#1      ProgramCompiler.visitFutureOrType (package:dev_compiler/src/kernel/compiler.dart:2948:11)
#2      FutureOrType.accept (package:kernel/ast.dart:11519:42)
#3      ProgramCompiler._emitType (package:dev_compiler/src/kernel/compiler.dart:2847:54)
#4      ProgramCompiler.visitFunctionType (package:dev_compiler/src/kernel/compiler.dart:3138:22)
#5      ProgramCompiler._emitFunctionTagged (package:dev_compiler/src/kernel/compiler.dart:2803:19)
#6      ProgramCompiler.visitFunctionDeclaration (package:dev_compiler/src/kernel/compiler.dart:4546:9)
#7      FunctionDeclaration.accept (package:kernel/ast.dart:10515:43)
#8      ProgramCompiler._visitStatement (package:dev_compiler/src/kernel/compiler.dart:3776:20)
#9      MappedListIterable.elementAt (dart:_internal/iterable.dart:413:31)
#10     ListIterator.moveNext (dart:_internal/iterable.dart:342:26)
#11     new _GrowableList._ofEfficientLengthIterable (dart:core-patch/growable_array.dart:206:27)
#12     new _GrowableList.of (dart:core-patch/growable_array.dart:153:28)
#13     new List.of (dart:core-patch/array_patch.dart:51:28)
#14     ListIterable.toList (dart:_internal/iterable.dart:213:44)
#15     ProgramCompiler.visitBlock (package:dev_compiler/src/kernel/compiler.dart:3964:62)
#16     Block.accept (package:kernel/ast.dart:8898:43)
#17     ProgramCompiler._visitStatement (package:dev_compiler/src/kernel/compiler.dart:3776:20)
#18     ProgramCompiler._emitFunctionScopedBody (package:dev_compiler/src/kernel/compiler.dart:3809:18)
#19     ProgramCompiler._emitSyncFunctionBody.<anonymous closure> (package:dev_compiler/src/kernel/compiler.dart:3578:17)
#20     ProgramCompiler._withLetScope (package:dev_compiler/src/kernel/compiler.dart:2376:25)
#21     ProgramCompiler._withCurrentFunction (package:dev_compiler/src/kernel/compiler.dart:3612:18)
#22     ProgramCompiler._emitSyncFunctionBody (package:dev_compiler/src/kernel/compiler.dart:3574:17)
#23     ProgramCompiler._emitFunction (package:dev_compiler/src/kernel/compiler.dart:3391:11)
#24     ProgramCompiler._emitLibraryFunction (package:dev_compiler/src/kernel/compiler.dart:2758:14)
#25     MappedIterator.moveNext (dart:_internal/iterable.dart:391:20)
#26     new _GrowableList._ofOther (dart:core-patch/growable_array.dart:219:26)
#27     new _GrowableList.of (dart:core-patch/growable_array.dart:155:26)
#28     new List.of (dart:core-patch/array_patch.dart:51:28)
#29     Iterable.toList (dart:core/iterable.dart:470:12)
#30     ProgramCompiler._emitLibraryProcedures (package:dev_compiler/src/kernel/compiler.dart:2723:10)
#31     ProgramCompiler._emitLibrary (package:dev_compiler/src/kernel/compiler.dart:572:7)
#32     List.forEach (dart:core-patch/growable_array.dart:433:8)
#33     ProgramCompiler.emitModule (package:dev_compiler/src/kernel/compiler.dart:431:15)
#34     _compile (package:dev_compiler/src/kernel/command.dart:442:27)
<asynchronous suspension>
#35     compile (package:dev_compiler/src/kernel/command.dart:51:12)
<asynchronous suspension>
#36     internalMain (package:dev_compiler/ddc.dart:38:18)
<asynchronous suspension>

```

### Dart 2.17.0-182.1.beta

```text
$> dartdevc -o example/example_error.js example/example_error.dart
Warning: this 'dartdevc' script is deprecated and will be removed. 
More details at https://github.com/dart-lang/sdk/issues/46100.
We're sorry, you've found a bug in our compiler.
You can report this bug at:
    https://github.com/dart-lang/sdk/issues/labels/web-dev-compiler
Please include the information below in your report, along with
any other information that may help us track it down. Thanks!
-------------------- %< --------------------
    dartdevc -k arguments: -o example/example_error.js example/example_error.dart
    dart --version: 2.17.0-182.1.beta (beta) (Mon Mar 14 13:49:22 2022 +0100) on "macos_x64"

Unsupported operation: Undetermined Nullability
#0      ProgramCompiler._emitFutureOrType (package:dev_compiler/src/kernel/compiler.dart:3056:7)
#1      ProgramCompiler.visitFutureOrType (package:dev_compiler/src/kernel/compiler.dart:2954:11)
#2      FutureOrType.accept (package:kernel/ast.dart:11527:42)
#3      ProgramCompiler._emitType (package:dev_compiler/src/kernel/compiler.dart:2853:54)
#4      ProgramCompiler.visitFunctionType (package:dev_compiler/src/kernel/compiler.dart:3137:22)
#5      ProgramCompiler._emitFunctionTagged (package:dev_compiler/src/kernel/compiler.dart:2809:19)
#6      ProgramCompiler.visitFunctionDeclaration (package:dev_compiler/src/kernel/compiler.dart:4545:9)
#7      FunctionDeclaration.accept (package:kernel/ast.dart:10523:43)
#8      ProgramCompiler._visitStatement (package:dev_compiler/src/kernel/compiler.dart:3775:20)
#9      MappedListIterable.elementAt (dart:_internal/iterable.dart:413:31)
#10     ListIterator.moveNext (dart:_internal/iterable.dart:342:26)
#11     new _GrowableList._ofEfficientLengthIterable (dart:core-patch/growable_array.dart:189:27)
#12     new _GrowableList.of (dart:core-patch/growable_array.dart:150:28)
#13     new List.of (dart:core-patch/array_patch.dart:51:28)
#14     ListIterable.toList (dart:_internal/iterable.dart:213:44)
#15     ProgramCompiler.visitBlock (package:dev_compiler/src/kernel/compiler.dart:3963:62)
#16     Block.accept (package:kernel/ast.dart:8906:43)
#17     ProgramCompiler._visitStatement (package:dev_compiler/src/kernel/compiler.dart:3775:20)
#18     ProgramCompiler._emitFunctionScopedBody (package:dev_compiler/src/kernel/compiler.dart:3808:18)
#19     ProgramCompiler._emitSyncFunctionBody.<anonymous closure> (package:dev_compiler/src/kernel/compiler.dart:3577:17)
#20     ProgramCompiler._withLetScope (package:dev_compiler/src/kernel/compiler.dart:2382:25)
#21     ProgramCompiler._withCurrentFunction (package:dev_compiler/src/kernel/compiler.dart:3611:18)
#22     ProgramCompiler._emitSyncFunctionBody (package:dev_compiler/src/kernel/compiler.dart:3573:17)
#23     ProgramCompiler._emitFunction (package:dev_compiler/src/kernel/compiler.dart:3390:11)
#24     ProgramCompiler._emitLibraryFunction (package:dev_compiler/src/kernel/compiler.dart:2764:14)
#25     MappedIterator.moveNext (dart:_internal/iterable.dart:391:20)
#26     new _GrowableList._ofOther (dart:core-patch/growable_array.dart:202:26)
#27     new _GrowableList.of (dart:core-patch/growable_array.dart:152:26)
#28     new List.of (dart:core-patch/array_patch.dart:51:28)
#29     Iterable.toList (dart:core/iterable.dart:470:12)
#30     ProgramCompiler._emitLibraryProcedures (package:dev_compiler/src/kernel/compiler.dart:2729:10)
#31     ProgramCompiler._emitLibrary (package:dev_compiler/src/kernel/compiler.dart:578:7)
#32     List.forEach (dart:core-patch/growable_array.dart:416:8)
#33     ProgramCompiler.emitModule (package:dev_compiler/src/kernel/compiler.dart:431:15)
#34     _compile (package:dev_compiler/src/kernel/command.dart:441:27)
<asynchronous suspension>
#35     compile (package:dev_compiler/src/kernel/command.dart:50:12)
<asynchronous suspension>
#36     internalMain (package:dev_compiler/ddc.dart:38:18)
<asynchronous suspension>

```