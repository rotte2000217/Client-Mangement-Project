#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /ClientManagement
COPY Api/Api.csproj Api/
COPY Application/Application.csproj Application/
COPY Infrastructure/Infra.Data.csproj Infrastructure/
COPY Domain/Domain.csproj Domain/
COPY Infra.CrossCutting.Commons/Infra.CrossCutting.IoC/Infra.CrossCutting.IoC.csproj Infra.CrossCutting.Commons/Infra.CrossCutting.IoC/
RUN dotnet restore "Api/Api.csproj"
COPY . .
WORKDIR "/src/Api"
RUN dotnet build "Api.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Api.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Api.dll"]
