
package com.matchpet.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.matchpet.model.Adocao;

public interface AdocaoRepository
        extends MongoRepository<Adocao, String> {
}


