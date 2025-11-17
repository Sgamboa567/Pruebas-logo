# Pruebas-logo

Ambiente estático para replicar las dos pantallas del ERP (login y módulo de notas de crédito) sustituyendo el logo original por la versión animada en GIF.

## Estructura

- `login.html`: Maqueta del formulario de ingreso.
- `dashboard.html`: Vista posterior al ingreso con la tabla de notas de crédito.
- `css/styles.css`: Estilos compartidos para ambas páginas.
- `assets/logo.gif`: Logo animado utilizado en ambas pantallas (puedes reemplazarlo por tu GIF real).
- `assets/logo.png`: Fotograma estático de referencia del logo.

## Uso

Simplemente abre cualquiera de los archivos `.html` en tu navegador para visualizar las pantallas. No se requiere ningún backend ni servidor adicional.

Si deseas cambiar el logo o el GIF por los archivos corporativos definitivos, sustituye los archivos dentro de `assets/` conservando los mismos nombres.

### Personalización visual

- El tamaño del logotipo en el login está controlado por la clase `brand-logo--login` y en el encabezado interno por `brand-logo--header`. Ajusta esas reglas dentro de `css/styles.css` si necesitas que el GIF ocupe más o menos espacio.
- Para actualizar la paleta o la tipografía edita las variables definidas al inicio de `css/styles.css`.
- Si requieres incorporar nuevos botones o secciones, parte de los componentes reutilizables descritos en la misma hoja de estilos (`.btn`, `.search-shell`, `.table-shell`, etc.).

## Vista previa rápida

Si prefieres lanzar un servidor local para compartir la maqueta, puedes hacerlo desde la raíz del proyecto con:

```bash
python -m http.server 8000
```

Luego ingresa en tu navegador a `http://localhost:8000/login.html` para el login o `http://localhost:8000/dashboard.html` para la vista interna.

## Subir cambios a Git

Si deseas compartir tus ajustes en un repositorio remoto, puedes usar los siguientes comandos desde la raíz del proyecto:

```bash
git add .
git commit -m "Describe brevemente el cambio"
git push origin <nombre-de-tu-rama>
```

Recuerda reemplazar `<nombre-de-tu-rama>` por la rama en la que estés trabajando (por ejemplo, `main` o `dev`).
