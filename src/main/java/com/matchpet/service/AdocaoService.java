
package com.matchpet.service;

import org.springframework.stereotype.Service;

import com.matchpet.model.Adocao;
import com.matchpet.repository.AdocaoRepository;
import com.matchpet.repository.UsuarioRepository;
import com.matchpet.repository.PetRepository;

@Service
public class AdocaoService {

    private final AdocaoRepository adocaoRepository;
    private final UsuarioRepository usuarioRepository;
    private final PetRepository petRepository;

    public AdocaoService(AdocaoRepository adocaoRepository,
                         UsuarioRepository usuarioRepository,
                         PetRepository petRepository) {
        this.adocaoRepository = adocaoRepository;
        this.usuarioRepository = usuarioRepository;
        this.petRepository = petRepository;
    }

    public Adocao cadastrar(String usuarioId, String petId,
                            String data) {

        if (!usuarioRepository.existsById(usuarioId)) {
            throw new IllegalArgumentException("Usuário não encontrado.");
        }

        if (!petRepository.existsById(petId)) {
            throw new IllegalArgumentException("Pet não encontrado.");
        }

        Adocao adocao = new Adocao(
                null,
                usuarioId,
                petId,
                data,
                "Pendente"
        );

        return adocaoRepository.save(adocao);
    }
}
