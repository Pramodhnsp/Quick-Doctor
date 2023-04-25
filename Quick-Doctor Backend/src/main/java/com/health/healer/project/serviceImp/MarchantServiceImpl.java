package com.health.healer.project.serviceImp;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import com.health.healer.project.entity.Marchant;
import com.health.healer.project.exception.DataNotFoundException;
import com.health.healer.project.exception.EmailAlreadyExists;
import com.health.healer.project.exception.PasswordInvalid;
import com.health.healer.project.exception.PhoneNumberAlreadyExists;
import com.health.healer.project.exception.emailNotFound;
import com.health.healer.project.repo.MarchantDao;
import com.health.healer.project.service.MarchantService;

@Service
public class MarchantServiceImpl implements MarchantService {

	@Autowired
	private MarchantDao repo;
	BCryptPasswordEncoder bcrypt = new BCryptPasswordEncoder();

	@Override
	public Object SignUp(Marchant m) {
		Marchant m1 = repo.fimdByMail(m.getM_email_id());
		Marchant m2 = repo.fimdByPhno(m.getM_ph_no());

		String pass = bcrypt.encode(m.getM_password());
		m.setM_password(pass);
		if (m1 instanceof Marchant || m2 instanceof Marchant) {
			if (m1 != null) {
				try {
					throw new EmailAlreadyExists();
				} catch (EmailAlreadyExists e) {
					return e.getMessage();
				}
			} else {
				try {
					throw new PhoneNumberAlreadyExists();
				} catch (PhoneNumberAlreadyExists p) {
					return p.getMessage();
				}
			}
		}
		return repo.save(m);
	}

	@Override
	public Object login(String email, String password) {
		Marchant m3 = repo.fimdByMail(email);

		if (m3 instanceof Marchant && m3.getM_email_id().equalsIgnoreCase(email)) {
			if (bcrypt.matches(password, m3.getM_password())) {
				return m3;
			} else {
				try {
					throw new PasswordInvalid();
				} catch (PasswordInvalid p) {
					return p.getMessage();
				}
			}
		} else {
			try {
				throw new emailNotFound();
			} catch (emailNotFound e) {
				return e.getMessage();
			}
		}
	}

	@Override
	public Object ForgotPassword(String email, String password) {
		Marchant m4 = repo.fimdByMail(email);
		if (m4 instanceof Marchant && m4.getM_email_id().equalsIgnoreCase(email)) {
			String pass = bcrypt.encode(password);
			m4.setM_password(pass);
			return repo.save(m4);
		} else {
			try {
				throw new emailNotFound();
			} catch (Exception e) {
				return e.getMessage();
			}
		}
	}

	@Override
	public Object FindByMarchantname(String marchantName) {
		Marchant m5 = repo.fimdByName(marchantName);
		if (m5 instanceof Marchant) {
			return m5;
		} else {
			try {
				throw new DataNotFoundException();
			} catch (DataNotFoundException d) {
				return d.getMessage();
			}
		}
	}

	@Override
	public Object FindByEmail(String emailId) {
		Marchant m6 = repo.fimdByMail(emailId);
		if (m6 instanceof Marchant) {
			return m6;
		} else {
			try {
				throw new emailNotFound();
			} catch (emailNotFound e) {
				return e.getMessage();
			}
		}
	}

	@Override
	public List<Marchant> Findall() {

		return repo.findAll();
	}

}
