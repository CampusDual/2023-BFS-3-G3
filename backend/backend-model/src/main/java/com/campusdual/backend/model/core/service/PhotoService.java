package com.campusdual.backend.model.core.service;

import com.campusdual.backend.api.core.service.IPhotoService;
import com.campusdual.backend.model.core.dao.PhotoDao;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Lazy
@Service("PhotoService")
public class PhotoService implements IPhotoService {

    @Autowired
    private PhotoDao photoDao;

    @Autowired
    private DefaultOntimizeDaoHelper daoHelper;
    @Override
    public EntityResult photoQuery(Map<String, Object> keyMap, List<String> attrList) throws OntimizeJEERuntimeException {
        return this.daoHelper.query(photoDao, keyMap, attrList);
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public EntityResult photoInsert(Map<String, Object> attributes) throws OntimizeJEERuntimeException {
        return this.daoHelper.insert(this.photoDao, attributes);
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public EntityResult photoUpdate(Map<String, Object> attributes, Map<String, Object> keyValues) throws OntimizeJEERuntimeException {
        return this.daoHelper.update(this.photoDao, attributes, keyValues);
    }

    @Override
    public EntityResult photoDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException {
        return this.daoHelper.delete(this.photoDao, keyMap);
    }
}
