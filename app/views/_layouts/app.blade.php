<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Laravel Blade Compiler</title>

        @include('_includes.styles')
    </head>

    <body>
        @include('_includes.header')

        @yield('content')

        @include('_includes.footer')
    </body>
</html>