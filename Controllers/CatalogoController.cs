using Catalogo.Models;
using Microsoft.AspNetCore.Mvc;

namespace Catalogo.Controllers
{
    public class CatalogoController : Controller
    {
        private static List<Item> _items = new() 
        {
new Item { 
    Id              = 1, 
    Titulo          = "Devil May Cry", 
    Genero          = "Hack and Slash", 
    Ano             = 2001, 
    Consola         = "PlayStation 2", 
    Descripcion     = "Videojuego que trata de un cazador..."
},
new Item 
{ 
    Id        = 2, 
    Titulo    = "Castlevania: Symphony of the Night", 
    Genero    = "Metroidvania", 
    Ano       = 1997, 
    Consola   = "PlayStation 2", 
    Descripcion = "Videojuego que trata de un cazador..."
},



new Item
{
    Id        = 3,
    Titulo    = "Assassins Creed 2",
    Genero    = "Accion-Aventura",
    Ano       = 2009,
    Consola   = "PlayStation 3, Xbox 360",
    Descripcion = "Ambientado en el renacimento Italiano, narra la historia de Ezio Auditore"
},


new Item
{
    Id        = 4,
    Titulo    = "Gears of war 3",
    Genero    = "Shooter",
    Ano       = 2011,
    Consola   = "Xbox 360",
    Descripcion = "Marcus Phoenix y los sobrevivientes de la CGO, luchan para salvar la humanidad"
},


new Item
{
    Id        = 5,
    Titulo    = "Halo Reach",
    Genero    = "Shooter",
    Ano       = 2010,
    Consola   = "Xbox 360",
    Descripcion = "El equipo noble lucha contra la guerra Covenant..."
},

new Item
{
    Id        = 6,
    Titulo    = "Resident evil 4",
    Genero    = "Survival-horror",
    Ano       = 2005,
    Consola   = "PlayStation, xbox, PC",
    Descripcion = "El agente Leon Kennedy tiene la mision de rescatar a la hija del presidente en zona donde experimentan con parasitos"
},



};
       

        // Lista — con filtro opcional por género
        public IActionResult Index (string? genero)
        {
            var resultado = string.IsNullOrEmpty(genero) 
                ? _items 
                : _items.Where(i => i.Genero == genero).ToList(); 
            ViewBag.Generos = _items.Select(i => i.Genero).Distinct().ToList(); 
            ViewBag.GeneroActual = genero;

            return View(resultado);
        }
        // Detalle
        public IActionResult Detalle (int id)
        {
            var item = _items.FirstOrDefault(i => i.Id == id);
            return item == null ? NotFound() : View(item);
        }
        // Formulario — GET
        public IActionResult Agregar()
        {
            return View();
        }
        // Formulario — POST
        [HttpPost]
        public IActionResult Agregar(Item item)
        {
            item.Id = _items.Count +1;
            _items.Add(item);
            return RedirectToAction("Index");
        }
    }
}
