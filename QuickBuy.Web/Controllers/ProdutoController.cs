﻿using Microsoft.AspNetCore.Mvc;
using QuickBuy.Domain.Contratos;
using QuickBuy.Domain.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuickBuy.Web.Controllers
{
    [Route("api/[Controller]")]
    public class ProdutoController : Controller
    {
        private readonly IProdutoRepositorio _produtoRepositorio;
        public ProdutoController ( IProdutoRepositorio produtoRepositorio)
        {
            _produtoRepositorio = produtoRepositorio;
        }

        [HttpGet]
        public IActionResult Get() 
        {
            try 
            {
                return Ok(_produtoRepositorio.ObterTodos());
            
            }catch(Exception ex)
            {
                return BadRequest(ex.ToString());
            
            }
        }

        [HttpPost("produto")]
        public IActionResult Produto([FromBody]Produto produto)
        {
            try
            {
                return Ok(_produtoRepositorio.ObterPorId(produto.Id));

            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());

            }
        }

        [HttpPost]
        public ActionResult Post([FromBody]Produto produto) 
        {
            try
            {
                _produtoRepositorio.Adicionar(produto);
                return Created("api/produto", produto);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

    }
}
