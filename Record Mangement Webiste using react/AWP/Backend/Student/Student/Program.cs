using SqlKata;
using SqlKata.Execution;
using System.Data.SqlClient; //SQL server Connection String
using SqlKata.Compilers;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(o => o.AddPolicy("MyPolicy", builder =>
{
    builder.WithOrigins("http://localhost:3000")
           .AllowAnyMethod()
           .AllowAnyHeader();
}));
builder.Services.AddScoped(factory =>
{
    string connString = builder.Configuration.GetConnectionString("ConnectionString");
    var connection = new SqlConnection(connString);
    var compiler = new SqlServerCompiler();
    return new QueryFactory(connection, compiler);
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("MyPolicy");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
