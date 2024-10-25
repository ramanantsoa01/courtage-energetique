<?php

namespace App\Controller;

use App\DTO\ContactDTO;
use App\Form\ContactType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\Routing\Attribute\Route;

class ContactController extends AbstractController
{
    #[Route('/contact', name: 'contact')]
    public function index(Request $request, MailerInterface $mailerInterface): Response
    {

        $data = new ContactDTO(); 
        $form = $this->createForm(ContactType::class, $data);

        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid())
        {
            // Envoi d'email
            $email = (new Email())
                ->from('testdev280@gmail.com')
                ->to($data->email)
                ->subject('Demande de devis/rendez-vous')
                ->text($data->message);

            $mailerInterface->send($email);

            return $this->redirectToRoute('contact');

        }

        return $this->render('contact/index.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}
