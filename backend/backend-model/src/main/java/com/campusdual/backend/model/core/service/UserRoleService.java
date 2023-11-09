package com.campusdual.backend.model.core.service;

import com.campusdual.backend.api.core.service.IUserRoleService;
import com.campusdual.backend.model.core.dao.UserDao;
import com.campusdual.backend.model.core.dao.UserRoleDao;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Lazy
@Service("UserRoleService")
public class UserRoleService implements IUserRoleService {
    @Autowired
    private UserRoleDao userRoleDao;

    @Autowired
    private DefaultOntimizeDaoHelper daoHelper;

    @Override
    public EntityResult userRoleQuery(Map<String, Object> keyMap, List<String> attrList) throws OntimizeJEERuntimeException {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        keyMap.put(UserDao.ID,auth.getName());
        return this.daoHelper.query(userRoleDao, keyMap, attrList);
    }
    @Override
    @Transactional(rollbackFor = Exception.class)
    public EntityResult userRoleInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException{
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        attrMap.put(UserDao.ID,auth.getName());
        return this.daoHelper.insert(userRoleDao, attrMap);
    }
}
