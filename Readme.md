El Flujo de Trabajo ideal (Git + Vercel)
La mejor forma de trabajar es vincular GitHub con Vercel. Así, cada vez que hagas un "push" a GitHub, Vercel se actualiza solo.

Si NO tienes vinculado GitHub con Vercel:
Para forzar una subida total de los archivos nuevos desde la terminal, usa:

# Sube una nueva versión a "preview"
vercel

# Si todo está bien, despliega a producción (esto pisa la versión anterior)
vercel --prod


El comando correcto de Git para actualizar todo:
Desde tu terminal, sigue este orden estrictamente para asegurar que los cambios viajen a la nube:

# 1. Agrega todos los cambios (incluyendo imágenes nuevas)
git add .

# 2. Crea el paquete del cambio con un mensaje
git commit -m "Agregadas imágenes de PWA y actualización de manifest"

# 3. Sube los archivos a GitHub
git push origin main