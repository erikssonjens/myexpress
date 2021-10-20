<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Books</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
</head>
<body class="container" style="margin-top: 50px;">

    <% if (messages.success) { %>
    <div class="alert alert-success" role="alert"><%- messages.success %></div>
    <% } %>

    <% if (messages.error) { %>
    <div class="alert alert-danger" role="alert"><%- messages.error %></div>
    <% } %>

    <div class="card"> 
        <div class="card-header">
            <ul class="nav nav-pills w-100">
                <li class="nav-pill active">
                    <a class="nav-link">Books</a>
                </li>
                <li class="nav-pill ml-auto">
                    <a class="nav-link active" href="/books/add">Add Book</a>
                </li>
            </ul>
        </div>
    <div class="card-body">
        
        <% if(data.length) { %>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Author</th>
                    <th width="200px">Action</th>
                </tr>
            </thead>
            <tbody>
            <% for(var i = 0; i< data.length; i++) { %>
                <tr>
                    <th scope="row"><%= (i+1) %></th>
                    <td><%= data[i].name%></td>
                    <td><%= data[i].author%></td>
                    <td>
                        <a class="btn btn-success edit" href="../books/edit/<%=data[i].id%>">Edit</a>                       
                        <a class="btn btn-danger delete" onclick="return alert('Are You sure?')" href="../books/delete/<%=data[i].id%>">Delete</a>                       
                    </td>
                </tr>
            <% } %>
            </tbody>
        </table>
        <% } %>
        
        <!-- if result is empty -->
        <% if(!data.length) { %>
            <p class="text-center">No book found!</p>
        <% } %>

        </div>
    </div>

</body>
</html>