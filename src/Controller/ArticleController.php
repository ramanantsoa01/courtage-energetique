<?php

namespace App\Controller;

use App\Repository\ArticleRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class ArticleController extends AbstractController
{
    #[Route('/actualité', name: 'actu_article')]
    public function index(ArticleRepository $articleRepository): Response
    {
        $article = $articleRepository->findAll();

        return $this->render('article/index.html.twig',[
            'article' => $article
        ]);
    }
}
